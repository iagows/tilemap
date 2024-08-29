import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { TagmarMap, TagmarTileInfo } from "../../../tagmar/TagmarTile";
import type { Tile } from "../../../types/MapInfo";
import type { Matrix } from "../../../util/types";
import { Colors } from "../../../util/colors";

const INITIAL_CONFIG: TagmarMap = {
	name: "Mapa",
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
		setName: (state, action: PayloadAction<string>) => {
			state.name = action.payload;
		},
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
			state.ground[row][column] = tile;
		},
	},
});

export default mapSlice.reducer;
export const { setName, setAllGround, setBackground, setTile } =
	mapSlice.actions;
