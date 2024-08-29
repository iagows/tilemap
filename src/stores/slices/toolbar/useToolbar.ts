import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import type { Colors } from "../../../util/colors";
import { setTileColor } from ".";

type Props = {
	color: Colors;
	setColor: (c: Colors) => void;
};

function useToolbar(): Props {
	const { currentTileColor } = useAppSelector((app) => app.toolbar);
	const dispatcher = useAppDispatch();

	function setColor(c: Colors): void {
		dispatcher(setTileColor(c));
	}

	return {
		color: currentTileColor,
		setColor,
	};
}

export default useToolbar;
