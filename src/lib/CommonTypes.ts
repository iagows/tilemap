export type Point = {
	x: number;
	y: number;
};

export type Dimension = {
	height: number;
	width: number;
};

export type Tile<T> = {
	floor: T;
};

export type TileInfo = Dimension & {
	half: Dimension;
	base: Point;
};
