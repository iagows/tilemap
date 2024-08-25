import Label from "./Label";

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

type StringProps = {
	value: string;
	placeholder: string;
	onChange: (str: string) => void;
};
export const InputString = ({ value, onChange, placeholder }: StringProps) => {
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

export const InputColor = ({ value, onChange, placeholder }: StringProps) => {
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
export const InputNumber = ({ value, onChange, placeholder }: NumberProps) => {
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
