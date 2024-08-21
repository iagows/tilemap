import { useEffect, useRef } from "react";
import type { Tile, TileInfo } from "./CommonTypes";
import { Helper } from "./helper";

type Props<T> = {
	width: number;
	height: number;
	data: Tile<T>[][];
	draw: (
		context2d: CanvasRenderingContext2D,
		line: number,
		column: number,
		tile: Tile<T>,
	) => void;
};

function CanvasMapMaker<T>({ width, height, draw, data }: Props<T>) {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		if (canvasRef.current) {
			const canvas = canvasRef.current;
			canvas.width = width;
			canvas.height = height;
			const context = canvas.getContext("2d");
			if (context) {
				const rows = data.length;
				const cols = data[0].length;
				for (let line = 0; line < rows; line++) {
					for (let column = 0; column < cols; column++) {
						draw(context, line, column, data[line][column]);
					}
				}
			}
		}
	}, [width, height, draw, data]);
	return <canvas ref={canvasRef} />;
}

export default CanvasMapMaker;
