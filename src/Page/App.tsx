import { useEffect, useState } from "preact/hooks";
import Countdown from "../Components/Countdown";
import Main from "../Components/MainStyle";
import { calculateCountdown, ITimeCalculation } from "../Functions/TimeCalculation";
import useInterval from "../Functions/useInterval";
import { InfoModal } from "./Modal";
import { IColour, IElectionData } from "../interface";
import yaml from 'yaml';

const hslToString = ( colour: IColour ) => {
	colour.l = colour.l - (colour.l / 2) - 5;
	return `hsl(${colour.h},${colour.s}%,${colour.l}%)`;
};

const App = () => {
	const [dialog, setDialogState] = useState<boolean>(false);
	const [countdownTime, setCountdownTime] = useState<ITimeCalculation | undefined>(undefined);
	const [electionData, setElectionData] = useState<IElectionData | undefined>(undefined);
	const [colour, setColour] = useState<string>(hslToString({ h: 0, s: 0, l: 60 }));

	useEffect(() => {
		fetch(`https://raw.githubusercontent.com/soup-bowl/thenextelection.uk/main/election.yml`)
		.then(response => response.text())
		.then(yamlText => yaml.parse(yamlText))
		.then((data:IElectionData) => {
			console.log("Data", data);
			setElectionData(data);
			setColour(hslToString(data.config.parties.find(p => p.abbr === data.data.party)!.color));
		})
	}, []);

	useInterval(() => {
		if (!dialog && (electionData !== undefined && !electionData.data.election)) {
			setCountdownTime(
				calculateCountdown(new Date(electionData.data.date ?? ''))
			);
		}
	}, 1000);

	return (
		<Main Colour={colour}>
			{(electionData !== undefined && !electionData.data.election) ?
				<>
					<p style={{
						margin: 0,
						fontSize: '0.75em',
						textShadow: '0px 0px 10px black'
					}}>The next UK General Election is</p>
					<Countdown counter={countdownTime} />
				</>
				:
				<p style={{
					margin: 10,
					fontSize: '1.5em',
					textShadow: '0px 0px 10px black'
				}}>An election is ongoing</p>}
			<a className="main-link" onClick={() => setDialogState(true)}>More info</a>
			<InfoModal
				ElectionDate={(electionData!== undefined) ? new Date(electionData.data.date) : undefined}
				Reason={electionData?.config.reasons.find(p => p.key === electionData.data.reason)?.message}
				IsElection={electionData?.data.election}
				open={dialog}
				onClose={() => setDialogState(false)}
			/>
		</Main>
	);
}

export default App;
