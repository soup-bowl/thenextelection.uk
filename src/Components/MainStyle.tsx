import { ComponentChildren } from "preact"
import { useMemo } from "preact/hooks"
import { backgroundColourGenerator } from "@/Functions"
import "@fontsource/eb-garamond"

interface Props {
	Colour: string[]
	children: ComponentChildren
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
