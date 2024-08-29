type Props = {
	htmlFor: string;
	postfix?: string;
};

const Label = ({ htmlFor, postfix = ": " }: Props) => {
	return (
		<label htmlFor={htmlFor}>
			{htmlFor}
			{postfix}
		</label>
	);
};

export default Label;
