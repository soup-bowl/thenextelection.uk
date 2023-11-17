import { useState } from "react";
import Countdown from "../Components/Countdown";
import Main from "../Components/MainStyle";
import { calculateCountdown, ITimeCalculation } from "../Functions/TimeCalculation";
import useInterval from "../Functions/useInterval";
import { InfoModal } from "./Modal";

const App = () => {
	const [dialog, setDialogState] = useState<boolean>(false);
	const [countdownTime, setCountdownTime] = useState<ITimeCalculation | undefined>(undefined);

	useInterval(() => {
		if (!dialog) {
			setCountdownTime(
				calculateCountdown(new Date(import.meta.env.VITE_ELECTION_DATE ?? ''))
			);
		}
	}, 1000);

	return (
		<Main>
			<p style={{
				margin: 0,
				fontSize: '0.75em',
				textShadow: '0px 0px 10px black'
			}}>The next UK General Election is</p>
			<Countdown counter={countdownTime} />
			<a className="main-link" onClick={() => setDialogState(true)}>More info</a>
			<InfoModal open={dialog} onClose={() => setDialogState(false)} />
		</Main>
	);
}

export default App;
