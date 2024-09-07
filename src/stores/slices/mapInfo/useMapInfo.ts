import {
	setBackground as setMapBackground,
	setAllGround as setMapGround,
	setTile as setSingleMapTile,
} from ".";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import type { TagmarMap, TagmarTileInfo } from "../../../tagmar/TagmarTile";
import type { Tile } from "../../../types/MapInfo";
import type { Matrix } from "../../../util/types";

type Out = {
	currentMap: TagmarMap;
	setBackground: (bg: string) => void;
	setGround: (newMap: Matrix<Tile<TagmarTileInfo>>) => void;
	setTile: (row: number, column: number, tile: Tile<TagmarTileInfo>) => void;
};
function useMapInfo(): Out {
	const dispatch = useAppDispatch();
	const currentMap = useAppSelector((s) => s.currentMap);

	function setGround(tiles: Matrix<Tile<TagmarTileInfo>>): void {
		dispatch(setMapGround(tiles));
	}

	function setBackground(bg: string): void {
		dispatch(setMapBackground(bg));
	}

	function setTile(
		row: number,
		column: number,
		tile: Tile<TagmarTileInfo>,
	): void {
		dispatch(setSingleMapTile({ row, column, tile }));
	}

	return {
		setTile,
		setGround,
		currentMap,
		setBackground,
	};
}

export default useMapInfo;
