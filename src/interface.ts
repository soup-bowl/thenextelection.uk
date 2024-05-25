export interface IElectionData {
	data: {
		date: string
		reason: string
		party: string[]
		election: boolean
	}
	config: {
		parties: {
			[key: string]: {
				name: string
				abbr: string
				color: string
				leader: string
			}
		}
		reasons: {
			[key: string]: string
		}
	}
}
