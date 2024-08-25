import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { TagmarMap, TagmarTileInfo } from "../../../tagmar/TagmarTile";
import type { Tile } from "../../../types/MapInfo";

const INITIAL_CONFIG: TagmarMap = {
	name: "Mapa",
	ground: [],
	background: "#abcabc",
};

const mapSlice = createSlice({
	name: "MapaInfo",
	initialState: INITIAL_CONFIG,
	// https://redux-toolkit.js.org/api/createslice/
	reducers: {
		setName: (state, action: PayloadAction<string>) => {
			state.name = action.payload;
		},
		setAllGround: (state, action: PayloadAction<Tile<TagmarTileInfo>[]>) => {
			state.ground = action.payload;
		},
		setBackground: (state, action: PayloadAction<string>) => {
			state.background = action.payload;
		},
	},
});

export default mapSlice.reducer;
export const { setName, setAllGround, setBackground } = mapSlice.actions;
