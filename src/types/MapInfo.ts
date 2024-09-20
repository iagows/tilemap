import type { Matrix } from "../util/types";

export type Tile<T> = T & {
	color: string;
};

export type MapInfo<T> = {
	ground: Matrix<Tile<T>>;
};
