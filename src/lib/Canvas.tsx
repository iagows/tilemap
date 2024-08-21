import { useEffect, useRef } from "react";
type Props = {
	width: number;
	height: number;
	draw: (context2d: CanvasRenderingContext2D) => void;
};

function Canvas({ width, height, draw }: Props) {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		if (canvasRef.current) {
			const canvas = canvasRef.current;
			canvas.width = width;
			canvas.height = height;
			const context = canvas.getContext("2d");
			if (context) {
				draw(context);
			}
		}
	}, [width, height, draw]);
	return <canvas ref={canvasRef} />;
}

export default Canvas;
