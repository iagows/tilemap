import EditorMenu from "./EditorMenu";
import Preview from "./Preview";
import useMapInfo from "./stores/slices/mapInfo/useMapInfo";

function App() {
	const { currentMap } = useMapInfo();
	return (
		<>
			<EditorMenu />
			<Preview
				mapInfo={currentMap}
				drawTile={(tile) => console.log({ tile })}
			/>
		</>
	);
}

export default App;
