import { ColorTranslator } from "colortranslator"

const neutralColour = new ColorTranslator("#404040")

const darkenColour = (colour: ColorTranslator): ColorTranslator => {
	const newL = colour.L - colour.L / 2 - 5
	const adjustedL = Math.max(0, Math.min(100, newL))
	return colour.setL(adjustedL)
}

const colourToGradient = (colours: ColorTranslator[]): string => {
	return `linear-gradient(90deg, ${colours
		.map((colour, index) => {
			const percentage = (index / (colours.length - 1)) * 100
			return `${colour.HEX} ${percentage}%`
		})
		.join(", ")})`
}

const backgroundColourGenerator = (colours: string[]): string => {
	if (colours.length === 0) {
		return neutralColour.HEX
	} else if (colours.length > 1) {
		const cols = colours.map((c) => darkenColour(new ColorTranslator(c)))
		return colourToGradient(cols)
	} else {
		return darkenColour(new ColorTranslator(colours[0])).HEX
	}
}

export default backgroundColourGenerator
