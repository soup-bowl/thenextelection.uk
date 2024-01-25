import { useState } from "preact/hooks";
import Countdown from "../Components/Countdown";
import Main from "../Components/MainStyle";
import { calculateCountdown, ITimeCalculation } from "../Functions/TimeCalculation";
import useInterval from "../Functions/useInterval";
import { InfoModal } from "./Modal";

const App = () => {
	const [dialog, setDialogState] = useState<boolean>(false);
	const [countdownTime, setCountdownTime] = useState<ITimeCalculation | undefined>(undefined);
	const isElectionTime: boolean = import.meta.env.VITE_ELECTION === '1';

	useInterval(() => {
		if (!dialog && !isElectionTime) {
			setCountdownTime(
				calculateCountdown(new Date(import.meta.env.VITE_ELECTION_DATE ?? ''))
			);
		}
	}, 1000);

	return (
		<Main>
			{!isElectionTime ?
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
			<InfoModal open={dialog} onClose={() => setDialogState(false)} />
		</Main>
	);
}

export default App;
