import { ReactNode, useMemo } from "preact/compat";
import "@fontsource/eb-garamond";

interface Props {
	Colour: string[];
	children: ReactNode;
}

const Main = ({ Colour, children }: Props) => {
	const backgroundColour = useMemo(() => {
		if (Colour.length > 1) {
			const gradientStops = Colour.map((color, index) => {
				const percentage = (index / (Colour.length - 1)) * 100;
				return `${color} ${percentage}%`;
			});
			return `linear-gradient(90deg, ${gradientStops.join(", ")})`;
		} else {
			return Colour[0];
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
