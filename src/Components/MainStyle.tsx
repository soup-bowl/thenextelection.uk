import { ReactNode } from "react";
import "@fontsource/eb-garamond";
import { Party, PartyColour } from "../Functions/PartyColour";

interface Props {
	children: ReactNode;
}

const Main = ({ children }: Props) => {
	return (
		<div style={{ textAlign: 'center' }}>
			<header style={{
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
			}}>
				{children}
			</header>
		</div>
	);
}

export default Main;
