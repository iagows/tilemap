import { InputColor, InputNumber, InputString } from "./helper/Input";
import useMapInfo from "../../stores/slices/mapInfo/useMapInfo";

function EditorMenu() {
	const {
		currentMap: { name, background, ground },
		setName,
		setBackground,
	} = useMapInfo();
	const rows = ground.length;
	const cols = rows < 1 ? 0 : ground[0].length;

	function setRows(val: number) {
		if (val !== rows) {
			console.log("mudou", val);
		}
	}

	function setColumns(val: number) {
		if (val !== cols) {
			console.log("mudou", val);
		}
	}

	return (
		<>
			<InputString value={name} onChange={setName} placeholder="Nome" />
			<InputNumber value={rows} onChange={setRows} placeholder="Linhas" />
			<InputNumber value={cols} onChange={setColumns} placeholder="Colunas" />
			<InputColor
				value={background}
				onChange={setBackground}
				placeholder="Fundo"
			/>
		</>
	);
}

export default EditorMenu;
