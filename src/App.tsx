import EditorMenu from "./components/EditorMenu";
import Preview from "./components/Preview";
import useMapInfo from "./stores/slices/mapInfo/useMapInfo";
import type { TagmarTileInfo } from "./tagmar/TagmarTile";
import type { Tile } from "./types/MapInfo";
import type { Diamond } from "./util/types";

const draw = (
	context: CanvasRenderingContext2D,
	tile: Tile<TagmarTileInfo>,
	position: Diamond,
) => {
	const { top, right, bottom, left } = position;
	context.beginPath();
	context.moveTo(top.x, top.y);
	context.lineTo(right.x, right.y);
	context.lineTo(bottom.x, bottom.y);
	context.lineTo(left.x, left.y);
	context.lineTo(top.x, top.y);
	context.fillStyle = tile.color;
	context.strokeStyle = "black";
	context.fill();
	context.stroke();
};

function App() {
	const { currentMap, setTile } = useMapInfo();

	return (
		<>
			<EditorMenu />
			<Preview mapInfo={currentMap} drawTile={draw} onClick={setTile} />
		</>
	);
}

export default App;
