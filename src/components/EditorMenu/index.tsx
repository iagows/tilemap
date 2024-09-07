import useSaveLoad from "../../hooks/useSaveLoad";
import useMapInfo from "../../stores/slices/mapInfo/useMapInfo";
import useTileConfig from "../../stores/slices/tileConfig/useTileConfig";
import useToolbar from "../../stores/slices/toolbar/useToolbar";
import { Colors } from "../../util/colors";
import transformMatrix from "../../util/matrix";
import { InputColor, InputNumber, InputRadio } from "./helper/Input";

const entries = Object.entries(Colors).map((e) => ({
	label: e[0],
	value: e[1],
}));

function EditorMenu() {
	const {
		setGround,
		setBackground,
		currentMap: { background, ground },
	} = useMapInfo();
	const { load, save } = useSaveLoad();
	const { color, setColor } = useToolbar();
	const { changeHeight, height } = useTileConfig();

	function setRows(val: number) {
		if (val > 0) {
			const nextMatrix = transformMatrix({
				reference: ground,
				targetColumnCount: ground[0].length,
				targetRowCount: val,
			});
			setGround(nextMatrix);
		}
	}

	function setColumns(val: number) {
		if (val > 0) {
			const nextMatrix = transformMatrix({
				reference: ground,
				targetColumnCount: val,
				targetRowCount: ground.length,
			});
			setGround(nextMatrix);
		}
	}

	return (
		<>
			<input type="button" value="Salvar" onClick={save} />
			<input type="button" value="Carregar" onClick={load} />
			<br />
			<InputNumber
				value={ground.length}
				onChange={setRows}
				placeholder="Linhas"
			/>
			<InputNumber
				value={ground[0].length}
				onChange={setColumns}
				placeholder="Colunas"
			/>
			<InputNumber
				value={height}
				step={2}
				min={2}
				onChange={changeHeight}
				placeholder="Altura do losango"
			/>
			<InputColor
				value={background}
				onChange={setBackground}
				placeholder="Fundo"
			/>
			<InputRadio
				groupId="Cores"
				currentValue={color}
				label="Cores"
				onChange={setColor}
				list={entries}
			/>
		</>
	);
}

export default EditorMenu;
