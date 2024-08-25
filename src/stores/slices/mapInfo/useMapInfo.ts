import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import type { TagmarMap, TagmarTileInfo } from "../../../tagmar/TagmarTile";
import {
	setAllGround as setMapGround,
	setName as setMapName,
	setBackground as setMapBackground,
} from ".";
import type { Tile } from "../../../types/MapInfo";

type Out = {
	currentMap: TagmarMap;
	setGround: (newMap: Tile<TagmarTileInfo>[]) => void;
	setName: (name: string) => void;
	setBackground: (bg: string) => void;
};
function useMapInfo(): Out {
	const dispatch = useAppDispatch();
	const currentMap = useAppSelector((s) => s.currentMap);

	function setGround(tiles: Tile<TagmarTileInfo>[]): void {
		dispatch(setMapGround(tiles));
	}

	function setName(name: string): void {
		dispatch(setMapName(name));
	}

	function setBackground(bg: string): void {
		dispatch(setMapBackground(bg));
	}

	return {
		currentMap,
		setGround,
		setName,
		setBackground,
	};
}

export default useMapInfo;
