import { Helper } from "../lib/helper";
import { Constants } from "./contants";
import { GroundTile, type MapTile } from "./MapTile";
const ROWS = 10;
const COLS = 10;

const data = Helper.mountBaseData<MapTile>(
	{
		floor: GroundTile.GRASS,
	},
	ROWS,
	COLS,
);

export const CANVAS_WIDTH =
	COLS * Constants.TILE_WIDTH - Constants.HALF_TILE_WIDTH;
export const CANVAS_HEIGHT =
	(ROWS / 2) * Constants.TILE_HEIGHT - Constants.HALF_TILE_HEIGHT;

export const creatorData = Helper.mountCreatorData(
	data,
	Constants.TILE_WIDTH,
	Constants.HALF_TILE_WIDTH,
	Constants.HALF_TILE_HEIGHT,
	Constants.BASE,
);
