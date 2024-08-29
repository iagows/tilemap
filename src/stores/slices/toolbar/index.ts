import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Colors } from "../../../util/colors";

const INITIAL_CONFIG = {
	currentTileColor: Colors.Agua,
};

const toolbarSlice = createSlice({
	name: "TileConfig",
	initialState: INITIAL_CONFIG,
	// https://redux-toolkit.js.org/api/createslice/
	reducers: {
		setTileColor: (state, action: PayloadAction<Colors>) => {
			state.currentTileColor = action.payload;
		},
	},
});

export default toolbarSlice.reducer;
export const { setTileColor } = toolbarSlice.actions;
