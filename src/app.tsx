import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import Countdown from './components/Countdown';
import Main from './components/MainStyle';
import { calculateCountdown, ITimeCalculation } from './functions/TimeCalculation';

const App = () => {
	const [countdownTime, setCountdownTime] = useState<ITimeCalculation | undefined>(undefined);

	useEffect(() => {
		const election: Date = new Date('2025-01-24');

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
