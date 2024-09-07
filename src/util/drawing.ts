import type { Tile } from "../types/MapInfo";
import type { Diamond } from "./types";

export const draw = <T>(
	context: CanvasRenderingContext2D,
	tile: Tile<T>,
	position: Diamond,
	border?: string,
) => {
	const { top, right, bottom, left } = position;
	context.fillStyle = tile.color;
	context.strokeStyle = border ?? tile.color;

	context.beginPath();

	context.moveTo(top.x, top.y - 1);
	context.lineTo(right.x + 1, right.y);
	context.lineTo(bottom.x, bottom.y + 1);
	context.lineTo(left.x - 1, left.y);

	context.closePath();

	context.fill();
	context.stroke();
};
