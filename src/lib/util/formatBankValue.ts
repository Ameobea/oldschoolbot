import { toKMB } from 'oldschooljs/dist/util/util';

const billion = 1_000_000_000;

const formatBankValue = (totalValue: number): string => {
	if (totalValue < billion) {
		return toKMB(totalValue);
	}

	// Special case if bank value >= 1B: show three decimals
	let formattedValue = (totalValue / billion).toFixed(3);

	// Remove trailing zeroes
	while (
		['0', '.'].includes(formattedValue[formattedValue.length - 1]) &&
		formattedValue.length > 1
	) {
		formattedValue = formattedValue.slice(0, -1);
	}

	return `${formattedValue}b`;
};

export default formatBankValue;
