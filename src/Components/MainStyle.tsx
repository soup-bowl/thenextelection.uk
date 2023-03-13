import { ReactNode } from "react";
import "@fontsource/eb-garamond";
import styled from "@emotion/styled";

interface Props {
	children: ReactNode;
}

const Main = ({ children }: Props) => {
	const Header = styled.header({
		backgroundImage: `url(${process.env.PUBLIC_URL + "/background.svg"})`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundColor: '#070037',
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
