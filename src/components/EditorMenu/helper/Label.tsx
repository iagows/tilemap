type Props = {
	htmlFor: string;
};

const Label = ({ htmlFor }: Props) => {
	return <label htmlFor={htmlFor}>{htmlFor}: </label>;
};

export default Label;
