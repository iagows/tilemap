import EditorMenu from "./components/EditorMenu";
import Preview from "./components/Preview";
import useMapInfo from "./stores/slices/mapInfo/useMapInfo";

function App() {
	const { currentMap } = useMapInfo();
	return (
		<>
			<EditorMenu />
			<Preview
				mapInfo={currentMap}
				drawTile={(tile) => console.log({ tile })}
				onClick={(x, y) => console.log(x, y)}
			/>
		</>
	);
}

export default App;
