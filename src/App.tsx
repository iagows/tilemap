import { CANVAS_HEIGHT, CANVAS_WIDTH, creatorData } from "./example/example";
import Canvas from "./lib/Canvas";
import { Helper } from "./lib/helper";

function App() {
	console.log({ creatorData });

	return (
		<Canvas
			width={CANVAS_WIDTH}
			height={CANVAS_HEIGHT}
			draw={Helper.contextDraw(creatorData)}
		/>
	);
}

export default App;
