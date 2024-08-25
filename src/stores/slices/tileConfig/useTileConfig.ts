import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { setHeight } from ".";

type Out = {
	changeHeight: (value: number) => void;
	height: number;
	width: number;
	halfHeight: number;
	halfWidth: number;
};
function useTileConfig(): Out {
	const dispatcher = useAppDispatch();
	const { halfHeight, halfWidth, height, width } = useAppSelector(
		(s) => s.tileInfo,
	);

	function changeHeight(value: number): void {
		dispatcher(setHeight(value));
	}
	return {
		changeHeight,
		halfHeight,
		halfWidth,
		height,
		width,
	};
}

export default useTileConfig;
