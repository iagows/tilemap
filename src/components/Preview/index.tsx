import { useEffect, useRef } from "react";
import type { MapInfo, Tile } from "../../types/MapInfo";
import useTileConfig from "../../stores/slices/tileConfig/useTileConfig";
import { isOdd } from "../../util/helper";

type Props<T> = {
	mapInfo: MapInfo<T>;
	drawTile: (tile: Tile<T>) => void;
	onClick?: (x: number, y: number) => void;
};

function Preview<T>({ mapInfo, drawTile, onClick }: Props<T>) {
	const { ground, name, background } = mapInfo;
	const ref = useRef<HTMLCanvasElement>(null);
	const { halfHeight, halfWidth, height, width } = useTileConfig();

	useEffect(() => {
		if (ref.current) {
			const canvas = ref.current;
			const ctx = canvas.getContext("2d");
			if (ctx) {
				ctx.clearRect(0, 0, 1000, 1000);
				for (let r = 0; r < ground.length; ++r) {
					const [row] = ground;
					for (let c = 0; c < row.length; ++c) {
						const odd = isOdd(r);

						const x = c * width + (odd ? halfWidth : 0);
						const y = r * halfHeight;

						const [columns] = row;

						ctx.beginPath();
						ctx.moveTo(x + halfWidth, y);

						ctx.lineTo(x, y + halfHeight);
						ctx.lineTo(x - halfWidth, y);
						ctx.lineTo(x, y - halfHeight);
						ctx.lineTo(x + halfWidth, y);

						ctx.strokeStyle = "black";
						ctx.stroke();
					}
				}
			}
		}
	}, [ground, halfHeight, halfWidth, width]);

	return (
		<>
			<div>{name}</div>
			<canvas ref={ref} style={{ background }} />
		</>
	);
}

export default Preview;
