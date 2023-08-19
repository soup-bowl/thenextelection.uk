import { useEffect, useState } from "react";
import Countdown from "../Components/Countdown";
import Main from "../Components/MainStyle";
import { calculateCountdown, ITimeCalculation } from "../Functions/TimeCalculation";
import styled from "@emotion/styled";
import { Modal } from "../Components/Modal";
import { IElectionData } from "../interface";

const App = () => {
	const [dialog, setDialogState] = useState<boolean>(false);
	const [countdownTime, setCountdownTime] = useState<Date | undefined>(undefined);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(import.meta.env.VITE_ELECTION_DATA ?? '');

				if (!response.ok) {
					throw new Error("Network response was not ok.");
				}

				const jsonData: IElectionData = await response.json();
				setCountdownTime(new Date(jsonData.next));
			} catch (error) {
				console.error("Error fetching JSON data:", error);
			}
		};

		fetchData();
	}, []);

	useEffect(() => {
		const updateCountdown = () => {
			if (countdownTime) {
				const newTime = new Date(countdownTime);
				newTime.setSeconds(newTime.getSeconds() - 1);
				setCountdownTime(newTime);
				console.log(newTime, calculateCountdown(newTime));
			}
		};

		const countdownInterval = setInterval(updateCountdown, 1000);

		return () => clearInterval(countdownInterval);
	}, [countdownTime]);

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
			{countdownTime !== undefined && <Countdown date={countdownTime} />}
			<Link style={{ marginTop: 2 }} onClick={() => setDialogState(true)}>More info</Link>
			<Modal open={dialog} onClose={() => setDialogState(false)}>
				<h2>About the Site</h2>
				<p>
					<strong>The Next Election UK</strong> just provides a simple, quick countdown to the next UK General
					Election. The website was made by <strong><a href="https://github.com/soup-bowl">soup-bowl
					</a></strong> and the code is <strong><a href="https://github.com/soup-bowl/thenextelection.uk">Open Source</a></strong>.
				</p>
				<h2>What is the source of the next election date?</h2>
				<p>
					The <strong>General Election countdown</strong> information is a rough figure based on information
					from the <a href="https://www.instituteforgovernment.org.uk/article/explainer/calling-general-election">
						Institute for Government
					</a> guidance on how a general election is called. If the ruling party calls for an early general
					election, this figure will be updated to reflect that.
				</p>
				<h2>How do I Vote?</h2>
				<p>
					You can find information about your local council votes and how to register to vote on the UK
					Government <a href="https://www.gov.uk/how-to-vote">Register to Vote</a> page.
				</p>
			</Modal>
		</Main>
	);
}

export default App;
