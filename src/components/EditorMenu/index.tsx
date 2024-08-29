import {
	InputColor,
	InputNumber,
	InputRadio,
	InputString,
} from "./helper/Input";
import useMapInfo from "../../stores/slices/mapInfo/useMapInfo";
import transformMatrix from "../../util/matrix";
import useTileConfig from "../../stores/slices/tileConfig/useTileConfig";
import { Colors } from "../../util/colors";

function EditorMenu() {
	const {
		setName,
		setGround,
		setBackground,
		currentMap: { name, background, ground },
	} = useMapInfo();
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
			<InputString value={name} onChange={setName} placeholder="Nome" />
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
				currentValue={Colors.Agua}
				label="Cores"
				onChange={(e) => console.log(e)}
				list={Object.entries(Colors).map((e) => ({
					label: e[0],
					value: e[1],
				}))}
			/>
		</>
	);
}

export default EditorMenu;
