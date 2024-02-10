export interface IElectionData {
	data: {
		date: string;
		reason: string;
		party: string;
	};
	config: {
		parties: {
			name: string;
			abbr: string;
			color: { h: number, s: number, l: number };
		}[];
		reasons: {
			key: string;
			message: string;
		}[];
	};
}
