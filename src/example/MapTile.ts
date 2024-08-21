import type { Tile } from "../lib/CommonTypes";

export enum GroundTile {
	SEA = 0,
	GRASS = 1,
	YELLOW_DESERT = 2,
	ORANGE_DESERT = 3,
	WHITE_DESERT = 4,
	SNOW = 5,
	RED = 6,
}

export type MapTile = Tile<GroundTile>;
