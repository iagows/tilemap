export type Tile<T> = T & {
	ground: string;
};

export type MapInfo<T> = {
	name: string;
	ground: Tile<T>[];
};
