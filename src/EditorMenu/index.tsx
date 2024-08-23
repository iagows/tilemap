import { useState } from "react";
import Editor from "../TileMap/Editor";

function stringer(setter: (val: string) => void) {
	return (e: React.ChangeEvent<HTMLInputElement>) => {
		const val = e.target.value;
		setter(val);
	};
}

function numberer(setter: (val: number) => void) {
	return (e: React.ChangeEvent<HTMLInputElement>) => {
		const val = e.target.value;
		setter(Number.parseFloat(val));
	};
}

type LabelProps = {
	htmlFor: string;
};

const Label = ({ htmlFor }: LabelProps) => {
	return <label htmlFor={htmlFor}>{htmlFor}: </label>;
};

type StringProps = {
	value: string;
	placeholder: string;
	onChange: (str: string) => void;
};
const InputString = ({ value, onChange, placeholder }: StringProps) => {
	return (
		<>
			<Label htmlFor={placeholder} />
			<input
				id={placeholder}
				type="text"
				value={value}
				onChange={stringer(onChange)}
				placeholder={placeholder}
			/>
		</>
	);
};

const InputColor = ({ value, onChange, placeholder }: StringProps) => {
	return (
		<>
			<Label htmlFor={placeholder} />
			<input
				id={placeholder}
				type="color"
				value={value}
				onChange={stringer(onChange)}
				placeholder={placeholder}
			/>
		</>
	);
};

type NumberProps = {
	value: number;
	placeholder: string;
	onChange: (value: number) => void;
};
const InputNumber = ({ value, onChange, placeholder }: NumberProps) => {
	return (
		<>
			<Label htmlFor={placeholder} />
			<input
				id={placeholder}
				type="number"
				min={1}
				step={1}
				value={value}
				placeholder={placeholder}
				onChange={numberer(onChange)}
			/>
		</>
	);
};

function EditorMenu() {
	const [name, setName] = useState<string>("");
	const [columns, setColumns] = useState<number>(1);
	const [rows, setRows] = useState<number>(1);
	const [bg, setBg] = useState<string>("#abcabc");
	return (
		<>
			<div>
				<InputString value={name} onChange={setName} placeholder="Nome" />
				<InputNumber
					value={columns}
					onChange={setColumns}
					placeholder="Colunas"
				/>
				<InputNumber value={rows} onChange={setRows} placeholder="Linhas" />
				<InputColor value={bg} onChange={setBg} placeholder="Fundo" />
			</div>
			<Editor background={bg} columns={columns} rows={rows} />
		</>
	);
}

export default EditorMenu;
