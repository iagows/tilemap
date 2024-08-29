import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mapInfo from "./slices/mapInfo";
import tileConfig from "./slices/tileConfig";
import toolbar from "./slices/toolbar";

const tagmarReducers = combineReducers({
	currentMap: mapInfo,
	tileInfo: tileConfig,
	toolbar: toolbar,
});

export const store = configureStore({
	reducer: tagmarReducers,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
