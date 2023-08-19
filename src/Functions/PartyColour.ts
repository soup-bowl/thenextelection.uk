export enum Party {
	Conservative,
	Labour,
	LiberalDemocrats,
}

interface HSL {
	h: number;
	s: number;
	l: number;
}

export const PartyColour = (party: Party):string => {
	let hsl = {} as HSL;
	switch (party) {
		case Party.Conservative:
			hsl = {h: 236, s: 100, l: 25};
			break;
		case Party.Labour:
			hsl = {h: 344, s: 100, l: 45};
			break;
		case Party.LiberalDemocrats:
			hsl = {h: 38, s: 96, l: 54};
			break;
	}

	hsl.l = hsl.l - (hsl.l / 2) - 5;

	return `hsl(${hsl.h},${hsl.s}%,${hsl.l}%)`;
}
