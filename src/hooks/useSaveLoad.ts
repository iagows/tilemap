import useMapInfo from "../stores/slices/mapInfo/useMapInfo";
import useTileConfig from "../stores/slices/tileConfig/useTileConfig";

type Out = {
	save: () => void;
	load: () => void;
};

const useSaveLoad = (): Out => {
	const { currentMap } = useMapInfo();
	const { height: tileHeight, changeHeight: changeTileHeight } =
		useTileConfig();

	function save() {
		console.log(currentMap, tileHeight);
	}

	function load() {
		console.log("carregar", "tile", "map");
	}

	return {
		save,
		load,
	};
};

export default useSaveLoad;
