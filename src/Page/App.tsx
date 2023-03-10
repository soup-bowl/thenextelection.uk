import { useEffect, useState } from "react";
import Countdown from "../Components/Countdown";
import Main from "../Components/MainStyle";
import { calculateCountdown, ITimeCalculation } from "../Functions/TimeCalculation";

const App = () => {
	const [countdownTime, setCountdownTime] = useState<ITimeCalculation | undefined>(undefined);

	useEffect(() => {
		const election: Date = new Date(process.env.REACT_APP_ELECTION_DATE ?? '');

		setCountdownTime(calculateCountdown(election));
		setInterval(() => {
			setCountdownTime(calculateCountdown(election));
		}, 1000);
	}, []);

	return (
		<Main>
			<p style={{ margin: 0, fontSize: '0.75em', textShadow: '0px 0px 10px black' }}>
				The next UK General Election is
			</p>
			{countdownTime !== undefined && <Countdown counter={countdownTime} />}
		</Main>
	);
}

export default App;
