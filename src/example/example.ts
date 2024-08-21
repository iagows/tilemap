import type { Dimension } from "../lib/CommonTypes";
import { Helper } from "../lib/helper";
import { Constants } from "./contants";
import { GroundTile, type MapTile } from "./MapTile";

const ROWS = 40;
const COLS = 10;

const data = Helper.mountBaseData<MapTile>(
	{
		floor: GroundTile.GRASS,
	},
	ROWS,
	COLS,
);

export const CANVAS_DIMENSION: Dimension = {
	width: COLS * Constants.Tile.width - Constants.Tile.half.width,
	height: (ROWS / 2) * Constants.Tile.height - Constants.Tile.half.height,
};

export const creatorData = Helper.mountCreatorData(data, Constants.Tile);
