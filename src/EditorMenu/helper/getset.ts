export namespace InputGetSet {
	export function stringer(setter: (val: string) => void) {
		return (e: React.ChangeEvent<HTMLInputElement>) => {
			const val = e.target.value;
			setter(val);
		};
	}

	export function numberer(setter: (val: number) => void) {
		return (e: React.ChangeEvent<HTMLInputElement>) => {
			const val = e.target.value;
			setter(Number.parseFloat(val));
		};
	}
}
