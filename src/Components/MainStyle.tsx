import { ReactNode, useMemo } from "preact/compat"
import "@fontsource/eb-garamond"
import { backgroundColourGenerator } from "@/Functions"

interface Props {
	Colour: string[]
	children: ReactNode
}

const Main = ({ Colour, children }: Props) => {
	const backgroundColour = useMemo(() => backgroundColourGenerator(Colour), [Colour])

	return (
		<div style={{ textAlign: "center", background: backgroundColour }}>
			<header
				style={{
					backgroundImage: 'url("./background.svg")',
					backgroundPosition: "center",
					backgroundSize: "cover",
					minHeight: "100vh",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					fontSize: "2rem",
					fontFamily: '"EB Garamond", serif',
					color: "white",
				}}
			>
				{children}
			</header>
		</div>
	)
}

export default Main
