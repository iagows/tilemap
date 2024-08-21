import { Constants } from "./example/contants";
import { CANVAS_DIMENSION, creatorData } from "./example/example";
import CanvasMapMaker from "./lib/Canvas";
import { Helper } from "./lib/helper";

function App() {
	console.log({ creatorData });

	return (
		<CanvasMapMaker
			width={CANVAS_DIMENSION.width}
			height={CANVAS_DIMENSION.height}
			data={creatorData}
			draw={Helper.contextDraw(Constants.Tile)}
		/>
	);
}

export default App;
