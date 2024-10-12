import { ComponentChildren } from "preact"

const Label = ({
	Size,
	NoMargin = false,
	children,
}: {
	Size: number
	NoMargin?: boolean
	children: ComponentChildren
}) => {
	return (
		<p
			style={{
				margin: NoMargin ? 0 : 10,
				fontSize: `${Size}em`,
				textShadow: "0px 0px 10px black",
			}}
		>
			{children}
		</p>
	)
}

export default Label
