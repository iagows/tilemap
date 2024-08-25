import { useEffect, useRef } from "react";
import type { MapInfo, Tile } from "../types/MapInfo";

type Props<T> = {
	mapInfo: MapInfo<T>;
	drawTile: (tile: Tile<T>) => void;
};
function Preview<T>({ mapInfo, drawTile }: Props<T>) {
	const { ground, name, background } = mapInfo;
	const ref = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		if (ref.current) {
			const canvas = ref.current;
			const context = canvas.getContext("2d");
			if (context) {
				console.log("preview - contexto ok", ground);
			}
		}
	}, [ground]);

	return (
		<>
			<div>{name}</div>
			<canvas ref={ref} style={{ background }} />
		</>
	);
}

export default Preview;
