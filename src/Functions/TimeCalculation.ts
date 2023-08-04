export interface ITimeCalculation {
	years: number;
	months: number;
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
}

// Function written by ChatGPT.
export const calculateCountdown = (targetDate : Date) : ITimeCalculation => {
	const now = new Date();

	// calculate differences between target date and now
	const differenceInSeconds = Math.floor((targetDate.getTime() - now.getTime()) / 1000);
	const differenceInMinutes = Math.floor(differenceInSeconds / 60);
	const differenceInHours = Math.floor(differenceInMinutes / 60);
	const differenceInDays = Math.floor(differenceInHours / 24);
	let differenceInMonths = targetDate.getMonth() - now.getMonth() + 12 * (targetDate.getFullYear() - now.getFullYear());
	const differenceInYears = differenceInMonths >= 12 ? Math.floor(differenceInMonths / 12) : 0;
	differenceInMonths = differenceInMonths % 12;

	// calculate remaining time in years, months, days, hours, minutes, and seconds
	const remainingTime = {
		years: differenceInYears,
		months: differenceInMonths,
		days: differenceInDays % 30,
		hours: differenceInHours % 24,
		minutes: differenceInMinutes % 60,
		seconds: differenceInSeconds % 60,
	};

	return remainingTime;
};
