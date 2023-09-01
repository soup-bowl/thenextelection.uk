export interface ITimeCalculation {
	years: number;
	months: number;
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
}

export const calculateCountdown = (targetDate : Date) : ITimeCalculation => {
	const now = new Date();

	// calculate differences in years, months, and days
	let years = targetDate.getFullYear() - now.getFullYear();
	let months = targetDate.getMonth() - now.getMonth();
	let days = targetDate.getDate() - now.getDate();

	if (days < 0) {
		months--;
		const lastFullMonth = new Date(targetDate.getFullYear(), targetDate.getMonth() - 1, 1);
		days += new Date(lastFullMonth.getFullYear(), lastFullMonth.getMonth() + 1, 0).getDate();
	}

	if (months < 0) {
		years--;
		months += 12;
	}

	// calculate differences in hours, minutes, and seconds
	const differenceInSeconds = Math.floor((targetDate.getTime() - now.getTime()) / 1000);
	const differenceInMinutes = Math.floor(differenceInSeconds / 60);
	const differenceInHours = Math.floor(differenceInMinutes / 60);

	const remainingTime = {
		years: years,
		months: months,
		days: days,
		hours: differenceInHours % 24,
		minutes: differenceInMinutes % 60,
		seconds: differenceInSeconds % 60,
	};

	return remainingTime;
};
