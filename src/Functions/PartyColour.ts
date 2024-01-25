export enum Party {
	None = 0,
	Conservative,
	Labour,
	LiberalDemocrats,
}

interface HSL {
	h: number;
	s: number;
	l: number;
}

/**
 * Returns the Party official primary colour in Hue, Saturation & Lightness format.
 * @param party The political party for which the color is requested.
 * @returns A string representing the color in HSL format.
 */
export const PartyColour = (party: Party): string => {
	let hsl = {} as HSL;
	switch (party) {
		default:
		case Party.None:
			hsl = { h: 0, s: 0, l: 60 };
			break;
		case Party.Conservative:
			hsl = { h: 236, s: 100, l: 25 };
			break;
		case Party.Labour:
			hsl = { h: 344, s: 100, l: 45 };
			break;
		case Party.LiberalDemocrats:
			hsl = { h: 38, s: 96, l: 54 };
			break;
	}

	hsl.l = hsl.l - (hsl.l / 2) - 5;

	return `hsl(${hsl.h},${hsl.s}%,${hsl.l}%)`;
}
