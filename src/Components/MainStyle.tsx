import { ReactNode } from "preact/compat";
import "@fontsource/eb-garamond";

interface Props {
	Colour: string;
	children: ReactNode;
}

const Main = ({ Colour, children }: Props) => {
	return (
		<div style={{ textAlign: 'center' }}>
			<header style={{
				backgroundImage: 'url("./background.svg")',
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				backgroundColor: Colour,
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
