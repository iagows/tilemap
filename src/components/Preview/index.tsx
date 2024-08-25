import { useEffect, useRef } from "react";
import type { MapInfo, Tile } from "../../types/MapInfo";

type Props<T> = {
	mapInfo: MapInfo<T>;
	drawTile: (tile: Tile<T>) => void;
	onClick?: (x: number, y: number) => void;
};
function Preview<T>({ mapInfo, drawTile, onClick }: Props<T>) {
	const { ground, name, background } = mapInfo;
	const ref = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		if (ref.current) {
			const canvas = ref.current;
			const context = canvas.getContext("2d");
			if (context) {
				console.log("context is ok");
			}
		}
	}, []);

	return (
		<>
			<div>{name}</div>
			<canvas ref={ref} style={{ background }} />
		</>
	);
}

export default Preview;
