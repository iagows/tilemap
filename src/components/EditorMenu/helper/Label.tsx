import type { PropsWithChildren } from "react";

type Props = {
	htmlFor: string;
	postfix?: string;
	color?: string;
};

const Label = ({
	htmlFor,
	postfix = ": ",
	color,
}: PropsWithChildren<Props>) => {
	return (
		<label htmlFor={htmlFor} style={{ background: color }}>
			{htmlFor}
			{postfix}
		</label>
	);
};

export default Label;
