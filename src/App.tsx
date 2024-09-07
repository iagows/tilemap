import EditorMenu from "./components/EditorMenu";
import Preview from "./components/Preview";
import useMapInfo from "./stores/slices/mapInfo/useMapInfo";
import useToolbar from "./stores/slices/toolbar/useToolbar";
import type { TagmarTileInfo } from "./tagmar/TagmarTile";
import type { Tile } from "./types/MapInfo";
import type { Colors } from "./util/colors";
import { draw } from "./util/drawing";
import type { Diamond } from "./util/types";

const tiler =
	(nextColor: Colors) =>
	(setter: (row: number, column: number, tile: Tile<TagmarTileInfo>) => void) =>
	(row: number, column: number, tile: Tile<TagmarTileInfo>): void =>
		setter(row, column, { ...tile, color: nextColor });

const fDraw =
	(color?: string) =>
	<T,>(context: CanvasRenderingContext2D, tile: Tile<T>, position: Diamond) =>
		draw(context, tile, position, color);

function App() {
	const { color } = useToolbar();
	const { currentMap, setTile } = useMapInfo();

	return (
		<>
			<EditorMenu />
			<Preview
				mapInfo={currentMap}
				drawTile={fDraw()}
				onClick={tiler(color)(setTile)}
			/>
		</>
	);
}

export default App;
