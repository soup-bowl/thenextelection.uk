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
			<header className="main">{children}</header>
		</div>
	)
}

export default Main
