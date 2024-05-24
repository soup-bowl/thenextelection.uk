import { IColour } from "@/interface"

export const neutralColour: IColour = { h: 0, s: 0, l: 25 }

export const hslToString = (colour: IColour): string => {
	return `hsl(${colour.h},${colour.s}%,${colour.l}%)`
}

export const darkenColour = (colour: IColour): IColour => {
	colour.l = colour.l - colour.l / 2 - 5
	return colour
}

export const hslArrayToGradient = (colours: IColour[]): string => {
	return `linear-gradient(90deg, ${colours
		.map((color, index) => {
			const percentage = (index / (colours.length - 1)) * 100
			return `${hslToString(darkenColour(color))} ${percentage}%`
		})
		.join(", ")})`
}
