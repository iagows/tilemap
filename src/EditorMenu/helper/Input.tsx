import { InputGetSet } from "./getset";
import { LabelHelp } from "./Label";

export namespace InputHelp {
	type StringProps = {
		value: string;
		placeholder: string;
		onChange: (str: string) => void;
	};
	export const InputString = ({
		value,
		onChange,
		placeholder,
	}: StringProps) => {
		return (
			<>
				<LabelHelp.Label htmlFor={placeholder} />
				<input
					id={placeholder}
					type="text"
					value={value}
					onChange={InputGetSet.stringer(onChange)}
					placeholder={placeholder}
				/>
			</>
		);
	};

	export const InputColor = ({ value, onChange, placeholder }: StringProps) => {
		return (
			<>
				<LabelHelp.Label htmlFor={placeholder} />
				<input
					id={placeholder}
					type="color"
					value={value}
					onChange={InputGetSet.stringer(onChange)}
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
	export const InputNumber = ({
		value,
		onChange,
		placeholder,
	}: NumberProps) => {
		return (
			<>
				<LabelHelp.Label htmlFor={placeholder} />
				<input
					id={placeholder}
					type="number"
					min={1}
					step={1}
					value={value}
					placeholder={placeholder}
					onChange={InputGetSet.numberer(onChange)}
				/>
			</>
		);
	};
}
