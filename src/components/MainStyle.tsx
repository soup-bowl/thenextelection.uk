import { h } from "preact";
import "@fontsource/eb-garamond";
import { CSSProperties } from "preact/compat";

interface Props {
	children: any;
}

const Main = ({ children }: Props) => {
	const header: CSSProperties = {
		backgroundImage: 'url(/assets/background.svg)',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundColor: '#363636',
		minHeight: '100vh',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: '2rem',
		fontFamily: '"EB Garamond", serif',
		color: 'white',
	};

	return (
		<div style={{ textAlign: 'center' }}>
			<header style={header}>
				{children}
			</header>
		</div>
	);
}

export default Main;