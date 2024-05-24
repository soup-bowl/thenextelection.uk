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
				color: IColour
				leader: string
			}
		}
		reasons: {
			[key: string]: string
		}
	}
}

export interface IColour {
	h: number
	s: number
	l: number
}
