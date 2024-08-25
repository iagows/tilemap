import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

const dimensions = (v: number) => ({
	height: v,
	width: v * 2,
	halfHeight: v / 2,
	halfWidth: v,
});

const HEIGHT = 16;

const INITIAL_CONFIG = dimensions(HEIGHT);

const tileConfigSlice = createSlice({
	name: "TileConfig",
	initialState: INITIAL_CONFIG,
	// https://redux-toolkit.js.org/api/createslice/
	reducers: {
		setHeight: (state, action: PayloadAction<number>) => {
			const { halfHeight, halfWidth, height, width } = dimensions(
				action.payload,
			);
			state.halfHeight = halfHeight;
			state.halfWidth = halfWidth;
			state.height = height;
			state.width = width;
		},
	},
});

export default tileConfigSlice.reducer;
export const { setHeight } = tileConfigSlice.actions;
