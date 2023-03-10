export interface ITimeCalculation {
	years: number;
	months: number;
	days: number;
}

// Function written by ChatGPT.
export const calculateCountdown = (targetDate : Date) : ITimeCalculation => {
	const now = new Date();

	// calculate differences in years, months, and days
	const differenceInYears = targetDate.getFullYear() - now.getFullYear();
	const differenceInMonths = targetDate.getMonth() - now.getMonth();
	const differenceInDays = targetDate.getDate() - now.getDate();

	// convert differences to seconds
	const remainingSeconds = Math.max(0, Math.floor((targetDate.getTime() - now.getTime()) / 1000));
	const monthsInSeconds = differenceInMonths * 30 * 24 * 60 * 60; // using 30 days per month for simplicity
	const daysInSeconds = differenceInDays * 24 * 60 * 60;

	// calculate remaining time in years, months, and days
	const remainingTime = {
		years: differenceInYears,
		months: differenceInMonths,
		days: differenceInDays,
	};
	remainingTime.years += Math.floor((remainingSeconds + monthsInSeconds + daysInSeconds) / (365 * 24 * 60 * 60));
	remainingTime.months += Math.floor(((remainingSeconds + daysInSeconds) % (365 * 24 * 60 * 60)) / (30 * 24 * 60 * 60)); // using 30 days per month for simplicity
	remainingTime.days += Math.floor(((remainingSeconds + daysInSeconds) % (30 * 24 * 60 * 60)) / (24 * 60 * 60));

	return remainingTime;
};
