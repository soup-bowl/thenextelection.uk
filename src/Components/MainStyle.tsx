import { CSSProperties, ReactNode } from "react";
import "@fontsource/eb-garamond";

interface Props {
	children: ReactNode;
}

export function Main({ children }: Props) {
	const header: CSSProperties = {
		backgroundImage: `url(${process.env.PUBLIC_URL + "/background.svg"})`,
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
