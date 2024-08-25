import { useState } from "react";
import Editor from "../TileMap/Editor";
import { InputHelp } from "./helper/Input";

function EditorMenu() {
	const [name, setName] = useState<string>("");
	const [columns, setColumns] = useState<number>(1);
	const [rows, setRows] = useState<number>(1);
	const [bg, setBg] = useState<string>("#abcabc");
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
				<InputHelp.InputColor value={bg} onChange={setBg} placeholder="Fundo" />
			</div>
			<Editor background={bg} columns={columns} rows={rows} />
		</>
	);
}

export default EditorMenu;
