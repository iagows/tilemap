import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { TagmarMap, TagmarTileInfo } from "../../../tagmar/TagmarTile";
import type { Tile } from "../../../types/MapInfo";
import { Colors } from "../../../util/colors";
import type { Matrix } from "../../../util/types";

const INITIAL_CONFIG: TagmarMap = {
	ground: [
		[
			{
				effect: "",
				color: Colors.Verde,
			},
		],
	],
	background: Colors.Agua,
};

type TilePosAndData = {
	row: number;
	column: number;
	tile: Tile<TagmarTileInfo>;
};

const mapSlice = createSlice({
	name: "MapaInfo",
	initialState: INITIAL_CONFIG,
	// https://redux-toolkit.js.org/api/createslice/
	reducers: {
		setAllGround: (
			state,
			action: PayloadAction<Matrix<Tile<TagmarTileInfo>>>,
		) => {
			state.ground = action.payload;
		},
		setBackground: (state, action: PayloadAction<string>) => {
			state.background = action.payload;
		},
		setTile: (state, action: PayloadAction<TilePosAndData>) => {
			const {
				payload: { column, row, tile },
			} = action;
			state.ground = state.ground.map((groundRow, rowIndex) => {
				if (rowIndex === row) {
					return groundRow.map((groundTile, columnIndex) => {
						if (columnIndex === column) {
							console.log("aqui", tile);
							return tile;
						}
						return groundTile;
					});
				}
				return groundRow;
			});
		},
		loadMap: (
			state,
			action: PayloadAction<{
				ground: Matrix<Tile<TagmarTileInfo>>;
				background: string;
			}>,
		) => {
			const { background, ground } = action.payload;
			state.background = background;
			state.ground = ground;
		},
	},
});

export default mapSlice.reducer;
export const { setAllGround, setBackground, setTile, loadMap } =
	mapSlice.actions;
