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
			<p style={{ margin: 0, fontSize: '0.75em' }}>
				The next UK General Election is
			</p>
			{countdownTime !== undefined &&
				<div style={{ display: 'flex', flexDirection: 'row', gap: 25, marginTop: 20 }}>
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
				</div>
			}
		</Main>
	);
}

export default App;
