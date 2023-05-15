import { useEffect, useState } from "react";
import Countdown from "../Components/Countdown";
import Main from "../Components/MainStyle";
import { calculateCountdown, ITimeCalculation } from "../Functions/TimeCalculation";
import styled from "@emotion/styled";

const App = () => {
	const [countdownTime, setCountdownTime] = useState<ITimeCalculation | undefined>(undefined);

	useEffect(() => {
		const election: Date = new Date(process.env.REACT_APP_ELECTION_DATE ?? '');

		setCountdownTime(calculateCountdown(election));
		setInterval(() => {
			setCountdownTime(calculateCountdown(election));
		}, 1000);
	}, []);

	const Info = styled.p({
		margin: 0,
		fontSize: '0.75em',
		textShadow: '0px 0px 10px black'
	});

	const Link = styled.a({
		color: 'white',
		margin: 0,
		fontSize: '0.75em',
		textShadow: '0px 0px 10px black',
		textDecoration: 'none',
		':hover': {
			textDecoration: 'underline'
		}
	});

	return (
		<Main>
			<Info>The next UK General Election is</Info>
			{countdownTime !== undefined && <Countdown counter={countdownTime} />}
			<Link style={{ marginTop: 2 }} href="https://www.gov.uk/how-to-vote" target="_blank">How to vote?</Link>
		</Main>
	);
}

export default App;
