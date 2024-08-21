import type { Point } from "../lib/CommonTypes";

export namespace Constants {
	export const TILE_HEIGHT = 8;
	export const TILE_WIDTH = TILE_HEIGHT * 2;
	export const HALF_TILE_WIDTH = TILE_WIDTH / 2;
	export const HALF_TILE_HEIGHT = TILE_HEIGHT / 2;
	export const BASE: Point = {
		x: 0,
		y: 0,
	};
}
