import type { Matrix } from "../util/types";

export type Tile<T> = T & {
	color: string;
};

export type MapInfo<T> = {
	name: string;
	background: string;
	ground: Matrix<Tile<T>>;
};
