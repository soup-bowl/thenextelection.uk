import { ReactNode } from "react";
import "@fontsource/eb-garamond";
import styled from "@emotion/styled";
import { Party, PartyColour } from "../Functions/PartyColour";

interface Props {
	children: ReactNode;
}

const Main = ({ children }: Props) => {
	const Header = styled.header({
		backgroundImage: 'url("./background.svg")',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundColor: PartyColour(Party.Conservative),
		minHeight: '100vh',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: '2rem',
		fontFamily: '"EB Garamond", serif',
		color: 'white',
	});

	return (
		<div style={{ textAlign: 'center' }}>
			<Header>
				{children}
			</Header>
		</div>
	);
}

export default Main;
