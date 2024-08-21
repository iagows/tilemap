import type { MapTile } from "../example/MapTile";
import type { Point, Tile } from "./CommonTypes";

type PositionedTile<T> = Tile<T> & {
	position: Point;
};

export namespace Helper {
	export const isOdd = (line: number) => line % 2 !== 0;

	export const mountBaseData = <T>(
		defaultObject: T,
		rows = 1,
		columns = 1,
	): Tile<T>[][] => {
		return new Array(rows).fill(new Array(columns).fill(defaultObject));
	};

	export const mountCreatorData = <T>(
		reference: Tile<T>[][],
		tileWidth: number,
		tileHalfWidth: number,
		tileHalfHeight: number,
		base: Point,
	): PositionedTile<T>[][] =>
		reference.map((row, rowNum) =>
			row.map((item, columNum) => {
				const odd = isOdd(rowNum);
				const x = columNum * tileWidth + (odd ? 0 : tileHalfWidth) + base.x;
				const y = tileHalfHeight * (rowNum - 1) + base.y;
				return {
					...item,
					position: {
						x,
						y,
					},
				};
			}),
		);

	export const contextDraw = <T>(tiles: Tile<T>[][]) => {
		return (context: CanvasRenderingContext2D) => {};
	};
}
