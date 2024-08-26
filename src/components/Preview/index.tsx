import { useEffect, useRef } from "react";
import type { MapInfo, Tile } from "../../types/MapInfo";
import useTileConfig from "../../stores/slices/tileConfig/useTileConfig";
import { isOdd, isPointInDiamond } from "../../util/helper";
import type { Diamond, Point } from "../../util/types";

type Props<T> = {
	mapInfo: MapInfo<T>;
	drawTile: (
		context: CanvasRenderingContext2D,
		tile: Tile<T>,
		position: Diamond,
	) => void;
	onClick?: (tile: Tile<T>, row: number, column: number) => void;
};

const getDiamond = (
	row: number,
	column: number,
	halfHeight: number,
	halfWidth: number,
	width: number,
): Diamond => {
	const odd = isOdd(row);

	const x = column * width + (odd ? halfWidth : 0);
	const y = row * halfHeight;

	const diamond: Diamond = {
		right: {
			x: x + halfWidth,
			y,
		},
		bottom: {
			x,
			y: y + halfHeight,
		},
		left: {
			x: x - halfWidth,
			y,
		},
		top: {
			x,
			y: y - halfHeight,
		},
	};

	return diamond;
};

function Preview<T>({ mapInfo, drawTile, onClick }: Props<T>) {
	const { ground, name, background } = mapInfo;
	const ref = useRef<HTMLCanvasElement>(null);
	const { halfHeight, halfWidth, width } = useTileConfig();

	useEffect(() => {
		if (ref.current) {
			const canvas = ref.current;
			const ctx = canvas.getContext("2d");
			if (ctx) {
				ctx.clearRect(0, 0, 1000, 1000);
				for (let r = 0; r < ground.length; ++r) {
					const [row] = ground;
					for (let c = 0; c < row.length; ++c) {
						const [currentTile] = row;
						const diamond = getDiamond(r, c, halfHeight, halfWidth, width);
						drawTile(ctx, currentTile, diamond);
					}
				}
			}
		}
	}, [ground, halfHeight, halfWidth, width, drawTile]);

	function _onClick(e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) {
		if (ref.current) {
			const canvas = ref.current;

			const rect = canvas.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;
			const point: Point = { x, y };

			for (let r = 0; r < ground.length; ++r) {
				const [row] = ground;
				for (let c = 0; c < row.length; ++c) {
					const [currentTile] = row;
					const diamond = getDiamond(r, c, halfHeight, halfWidth, width);
					if (isPointInDiamond(point, diamond)) {
						onClick?.(currentTile, r, c);
						return;
					}
				}
			}
		}
	}

	return (
		<>
			<div>{name}</div>
			{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			<canvas ref={ref} style={{ background }} onClick={_onClick} />
		</>
	);
}

export default Preview;
