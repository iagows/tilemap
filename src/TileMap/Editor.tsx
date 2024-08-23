import { useEffect, useRef } from "react";
type Tile<T> = {
	floor: string;
};

type Props = {
	background: string;
	columns: number;
	rows: number;
};
function Preview({ background, columns, rows }: Props) {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	useEffect(() => {
		if (canvasRef.current) {
			const canvas = canvasRef.current;
			const context = canvas.getContext("2d");
			if (context) {
				console.log("contexto ok");
			}
		}
	}, []);
	return <canvas ref={canvasRef} style={{ background }} />;
}

export default Preview;
