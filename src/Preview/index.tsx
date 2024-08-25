import type { MapInfo, Tile } from "../types/MapInfo";

type Props<T> = {
	mapInfo: MapInfo<T>;
	drawTile: (tile: Tile<T>) => void;
};
function Preview<T>({ mapInfo, drawTile }: Props<T>) {
	const { ground, name } = mapInfo;
	return (
		<>
			<div>{name}</div>
		</>
	);
}

export default Preview;
