import type { Matrix } from "./types";

type Transformation<T> = (matrix: Matrix<T>, value: number) => Matrix<T>;

const reduceRows = <T>(matrix: Matrix<T>, newRows: number): Matrix<T> =>
	matrix.slice(0, newRows);

const reduceColumns = <T>(matrix: Matrix<T>, newCols: number): Matrix<T> =>
	matrix.map((row) => row.slice(0, newCols));

const increaseRows = <T>(matrix: Matrix<T>, newRows: number): Matrix<T> => {
	const lastRow = matrix.length > 0 ? matrix[matrix.length - 1] : [];
	return [
		...matrix,
		...Array.from({ length: newRows - matrix.length }, () =>
			lastRow.slice(0, matrix[0]?.length ?? 0),
		),
	];
};

const increaseColumns = <T>(matrix: Matrix<T>, newColumns: number): Matrix<T> =>
	matrix.map((row) => [
		...row,
		...Array(newColumns - row.length).fill(
			row.length > 0 ? row[row.length - 1] : 0,
		),
	]);

const apply = <T>(
	matrix: Matrix<T>,
	newValue: number,
	validate: (matrix: Matrix<T>, value: number) => boolean,
	onApply: Transformation<T>,
): Matrix<T> =>
	validate(matrix, newValue) ? onApply(matrix, newValue) : matrix;

const transformations = <T>(): Transformation<T>[] => [
	(matrix, rows) =>
		rows < (matrix.length > 0 ? matrix.length : 1)
			? reduceRows(matrix, rows)
			: increaseRows(matrix, rows),
	(matrix, columns) =>
		columns < (matrix.length > 0 && matrix[0].length > 0 ? matrix[0].length : 1)
			? reduceColumns(matrix, columns)
			: increaseColumns(matrix, columns),
];

const finalMatrix = <T>(reference: Matrix<T>): Matrix<T> =>
	transformations<T>().reduce(
		(matrix, transformation) =>
			apply(matrix, matrix.length, (_, value) => value >= 0, transformation),
		reference,
	);

type Prop<T> = {
	reference: Matrix<T>;
	targetRowCount: number;
	targetColumnCount: number;
};

const transformMatrix = <T>({
	reference,
	targetColumnCount,
	targetRowCount,
}: Prop<T>): Matrix<T> => {
	const rowTransformation = (matrix: Matrix<T>) =>
		targetRowCount < (matrix.length > 0 ? matrix.length : 1)
			? reduceRows(matrix, targetRowCount)
			: increaseRows(matrix, targetRowCount);

	const columnTransformation = (matrix: Matrix<T>) =>
		targetColumnCount <
		(matrix.length > 0 && matrix[0].length > 0 ? matrix[0].length : 1)
			? reduceColumns(matrix, targetColumnCount)
			: increaseColumns(matrix, targetColumnCount);

	const transformedMatrix = finalMatrix(
		[rowTransformation, columnTransformation].reduce(
			(matrix, transformation) => transformation(matrix),
			reference,
		),
	);

	return transformedMatrix.map((row) => row.slice(0, targetColumnCount));
};

export default transformMatrix;
