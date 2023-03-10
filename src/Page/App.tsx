import { useEffect, useState } from "react";
import { Main } from "../Components/MainStyle";
import { calculateCountdown, ITimeCalculation } from "../Functions/TimeCalculation";

function App() {
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
			{countdownTime !== undefined &&
				<div style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
					flexWrap: 'wrap',
					height: 100,
					gap: 25,
					marginTop: 20,
					overflow: 'hidden',
					textShadow: '0px 0px 10px black',
				}}>
					<div style={{ display: 'flex', flexDirection: 'column-reverse' }}>
						<span>Years</span>
						<span style={{ fontSize: '1.5em', fontWeight: 'bold' }}>{countdownTime.years}</span>
					</div>
					<div style={{ display: 'flex', flexDirection: 'column-reverse' }}>
						<span>Months</span>
						<span style={{ fontSize: '1.5em', fontWeight: 'bold' }}>{countdownTime.months}</span>
					</div>
					<div style={{ display: 'flex', flexDirection: 'column-reverse' }}>
						<span>Days</span>
						<span style={{ fontSize: '1.5em', fontWeight: 'bold' }}>{countdownTime.days}</span>
					</div>
					<div style={{ display: 'flex', flexDirection: 'column-reverse' }}>
						<span>Hours</span>
						<span style={{ fontSize: '1.5em', fontWeight: 'bold' }}>{countdownTime.hours}</span>
					</div>
					<div style={{ display: 'flex', flexDirection: 'column-reverse' }}>
						<span>Minutes</span>
						<span style={{ fontSize: '1.5em', fontWeight: 'bold' }}>{countdownTime.minutes}</span>
					</div>
					<div style={{ display: 'flex', flexDirection: 'column-reverse' }}>
						<span>Seconds</span>
						<span style={{ fontSize: '1.5em', fontWeight: 'bold' }}>{countdownTime.seconds}</span>
					</div>
				</div>
			}
		</Main>
	);
}

export default App;
