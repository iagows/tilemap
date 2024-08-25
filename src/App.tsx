import { useState } from "react";
import EditorMenu from "./EditorMenu";
import Preview from "./Preview";
import type { TagmarMap } from "./tagmar/TagmarTile";
import { Tagmar } from "./constants";

function App() {
	const [mapa, setMapa] = useState<TagmarMap>(Tagmar.startingMap);
	return (
		<>
			<EditorMenu />
			<Preview mapInfo={mapa} drawTile={(tile) => console.log({ tile })} />
		</>
	);
}

export default App;
