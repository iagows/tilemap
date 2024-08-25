export namespace LabelHelp {
	type Props = {
		htmlFor: string;
	};

	export const Label = ({ htmlFor }: Props) => {
		return <label htmlFor={htmlFor}>{htmlFor}: </label>;
	};
}
