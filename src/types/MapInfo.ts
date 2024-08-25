export type Tile<T> = T & {
	ground: string;
};

export type MapInfo<T> = {
	name: string;
	background: string;
	ground: Tile<T>[];
};
