import type { Diamond, Point } from "./types";

export const isOdd = (n: number) => n % 2 === 1;

const diamondToPath = (diamond: Diamond): Point[] => [
	diamond.top,
	diamond.right,
	diamond.bottom,
	diamond.left,
];

const isPointLeftOfLine = (p: Point, start: Point, end: Point): boolean =>
	(end.x - start.x) * (p.y - start.y) - (end.y - start.y) * (p.x - start.x) > 0;

export const isPointInDiamond = (p: Point, diamond: Diamond): boolean => {
	const d = diamondToPath(diamond);
	const numVert = d.length;
	return d.every((v, index) => {
		const next = d[(index + 1) % numVert];

		return isPointLeftOfLine(p, v, next);
	});
};

export function getEnumKeyByEnumValue<
	TEnumKey extends string,
	TEnumVal extends string | number,
>(
	myEnum: { [key in TEnumKey]: TEnumVal },
	enumValue: TEnumVal,
): TEnumKey | undefined {
	const keys = (Object.keys(myEnum) as TEnumKey[]).filter(
		(key) => myEnum[key] === enumValue,
	);

	return keys.length > 0 ? keys[0] : undefined;
}
