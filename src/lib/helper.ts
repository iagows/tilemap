import type { Point, Tile, TileInfo } from "./CommonTypes";

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
		tile: TileInfo,
	): PositionedTile<T>[][] =>
		reference.map((row, rowNum) =>
			row.map((item, columNum) => {
				const odd = isOdd(rowNum);
				const x =
					columNum * tile.width + (odd ? 0 : tile.half.width) + tile.base.x;
				const y = tile.half.height * (rowNum - 1) + tile.base.y;
				return {
					...item,
					position: {
						x,
						y,
					},
				};
			}),
		);

	export const contextDraw =
		(tileInfo: TileInfo) =>
		<T>(
			context: CanvasRenderingContext2D,
			line: number,
			column: number,
			tile: Tile<T>,
		) => {
			const odd = isOdd(line);
			const x =
				column * tileInfo.width +
				(odd ? 0 : tileInfo.half.width) +
				tileInfo.base.x;
			const y = tileInfo.half.height * (line - 1) + tileInfo.base.y;

			context.beginPath();
			context.fillStyle = "green";
			context.strokeStyle = "black";
			context.moveTo(x, y);
			context.lineTo(x + tileInfo.half.width, y + tileInfo.half.height);
			context.lineTo(x, y + tileInfo.height);
			context.lineTo(x - tileInfo.half.width, y + tileInfo.half.height);
			context.closePath();
			context.fill();
			context.stroke();
		};
}
