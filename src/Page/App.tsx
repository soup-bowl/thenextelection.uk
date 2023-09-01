import { useState } from "react";
import Countdown from "../Components/Countdown";
import Main from "../Components/MainStyle";
import { calculateCountdown, ITimeCalculation } from "../Functions/TimeCalculation";
import styled from "@emotion/styled";
import useInterval from "../Functions/useInterval";
import { InfoModal } from "./Modal";

const App = () => {
	const [dialog, setDialogState] = useState<boolean>(false);
	const [countdownTime, setCountdownTime] = useState<ITimeCalculation | undefined>(undefined);

	useInterval(() => {
		setCountdownTime(calculateCountdown(
			new Date(import.meta.env.VITE_ELECTION_DATE ?? '')
		));
	}, 1000);

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
		cursor: "pointer",
		textDecoration: 'none',
		':hover': {
			textDecoration: 'underline'
		}
	});

	return (
		<Main>
			<Info>The next UK General Election is</Info>
			<Countdown counter={countdownTime} />
			<Link style={{ marginTop: 2 }} onClick={() => setDialogState(true)}>More info</Link>
			<InfoModal open={dialog} onClose={() => setDialogState(false)} />
		</Main>
	);
}

export default App;
