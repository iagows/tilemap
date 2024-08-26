export type Matrix<T> = T[][];

export type Point = {
	x: number;
	y: number;
};

export type Diamond = {
	top: Point;
	right: Point;
	bottom: Point;
	left: Point;
};
