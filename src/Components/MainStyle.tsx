import { ReactNode, useMemo } from "preact/compat";
import "@fontsource/eb-garamond";
import { darkenColour, hslArrayToGradient, hslToString, neutralColour } from "../Functions";
import { IColour } from "../interface";

interface Props {
	Colour: IColour[];
	children: ReactNode;
}

const Main = ({ Colour, children }: Props) => {
	const backgroundColour = useMemo(() => {
		if (Colour.length === 0) {
			return hslToString(neutralColour);
		} else if (Colour.length > 1) {
			return hslArrayToGradient(Colour);
		} else {
			return hslToString(darkenColour(Colour[0]));
		}
	}, [Colour])

	return (
		<div style={{ textAlign: 'center', background: backgroundColour }}>
			<header style={{
				backgroundImage: 'url("./background.svg")',
				backgroundPosition: 'center',
				backgroundSize: 'cover',
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
