import { useState } from "react";
import Editor from "../TileMap/Editor";
import { InputHelp } from "./helper/Input";
import useMapInfo from "../stores/slices/mapInfo/useMapInfo";

function EditorMenu() {
	const {
		currentMap: { name, background },
		setName,
		setBackground,
	} = useMapInfo();
	const [columns, setColumns] = useState<number>(1);
	const [rows, setRows] = useState<number>(1);

	return (
		<>
			<div>
				<InputHelp.InputString
					value={name}
					onChange={setName}
					placeholder="Nome"
				/>
				<InputHelp.InputNumber
					value={columns}
					onChange={setColumns}
					placeholder="Colunas"
				/>
				<InputHelp.InputNumber
					value={rows}
					onChange={setRows}
					placeholder="Linhas"
				/>
				<InputHelp.InputColor
					value={background}
					onChange={setBackground}
					placeholder="Fundo"
				/>
			</div>
			<Editor background={background} columns={columns} rows={rows} />
		</>
	);
}

export default EditorMenu;
