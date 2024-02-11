import { useEffect, useState } from "preact/hooks";
import { ReactNode } from "preact/compat";
import { Countdown, Main } from "../Components";
import { ITimeCalculation, calculateCountdown, useInterval } from "../Functions";
import { InfoModal } from "./Modal";
import { IColour, IElectionData } from "../interface";
import yaml from 'yaml';

const hslToString = (colour: IColour) => {
	colour.l = colour.l - (colour.l / 2) - 5;
	return `hsl(${colour.h},${colour.s}%,${colour.l}%)`;
};

const Label = ({ Size, NoMargin = false, children }:
	{ Size: number, NoMargin?: boolean, children: ReactNode }
) => {
	return (<p style={{
		margin: (NoMargin) ? 0 : 10,
		fontSize: `${Size}em`,
		textShadow: '0px 0px 10px black'
	}}>{children}</p>);
};

const App = () => {
	const [dialog, setDialogState] = useState<boolean>(false);
	const [countdownTime, setCountdownTime] = useState<ITimeCalculation | undefined>(undefined);
	const [electionData, setElectionData] = useState<IElectionData | undefined>(undefined);
	const [colour, setColour] = useState<string>(hslToString({ h: 0, s: 0, l: 60 }));

	useEffect(() => {
		fetch(import.meta.env.VITE_SOURCE)
			.then(response => response.text())
			.then(yamlText => yaml.parse(yamlText))
			.then((data: IElectionData) => {
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
			{electionData !== undefined ?
				<>
					{!electionData.data.election ?
						<>
							<Label Size={0.75} NoMargin>The next UK General Election is</Label>
							<Countdown counter={countdownTime} />
						</>
						:
						<Label Size={1.5}>An election is ongoing</Label>}
					<a className="main-link" onClick={() => setDialogState(true)}>More info</a>
					<InfoModal
						ElectionDate={new Date(electionData.data.date)}
						Reason={electionData.config.reasons.find(p => p.key === electionData.data.reason)?.message}
						IsElection={electionData.data.election}
						open={dialog}
						onClose={() => setDialogState(false)}
					/>
				</> : <Label Size={1}>Loading...</Label>}
		</Main>
	);
}

export default App;
