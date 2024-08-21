import type { Point, TileInfo } from "../lib/CommonTypes";

export namespace Constants {
	const TILE_HEIGHT = 8;
	const TILE_WIDTH = TILE_HEIGHT * 2;
	const HALF_TILE_WIDTH = TILE_WIDTH / 2;
	const HALF_TILE_HEIGHT = TILE_HEIGHT / 2;
	const BASE: Point = {
		x: 0,
		y: 0,
	};

	export const Tile: TileInfo = {
		height: TILE_HEIGHT,
		width: TILE_WIDTH,
		half: {
			height: HALF_TILE_HEIGHT,
			width: HALF_TILE_WIDTH,
		},
		base: BASE,
	} as const;
}
