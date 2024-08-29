import type React from "react";
import { Colors } from "../../../util/colors";
import Label from "./Label";
import { Fragment } from "react";
import { getEnumKeyByEnumValue } from "../../../util/helper";

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
	step?: number;
	min?: number;
	onChange: (value: number) => void;
};
export const InputNumber = ({
	value,
	onChange,
	placeholder,
	...props
}: NumberProps) => {
	return (
		<>
			<Label htmlFor={placeholder} />
			<input
				id={placeholder}
				type="number"
				value={value}
				placeholder={placeholder}
				onChange={numberer(onChange)}
				{...props}
			/>
		</>
	);
};

type Props = {
	label: string;
	groupId: string;
	currentValue: Colors;
	onChange: (value: Colors) => void;
	list: { label: string; value: Colors }[];
};

function radioerer(setter: (val: Colors) => void) {
	return (e: React.ChangeEvent<HTMLInputElement>) => {
		const val = e.target.value;

		const value = getEnumKeyByEnumValue(Colors, val);
		if (value) {
			setter(Colors[value]);
		}
	};
}

export function InputRadio({
	currentValue,
	groupId,
	label,
	onChange,
	list,
}: Props): React.JSX.Element {
	return (
		<>
			<p>{label}</p>
			{list.map((radio) => {
				console.log("radio", radio.value, currentValue);
				return (
					<Fragment key={radio.label}>
						<input
							type="radio"
							id={radio.label}
							name={groupId}
							checked={radio.value === currentValue}
							onChange={radioerer(onChange)}
							value={radio.value}
						/>
						<Label htmlFor={radio.label} postfix="" color={radio.value} />
					</Fragment>
				);
			})}
		</>
	);
}
