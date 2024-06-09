import { ITimeCalculation } from "@/Functions/TimeCalculation"

interface Props {
	counter?: ITimeCalculation
}

const Countdown = ({ counter = undefined }: Props) => {
	if (counter === undefined) {
		return (
			<div style={{ textAlign: "center" }}>
				<p>Loading...</p>
			</div>
		)
	}

	return (
		<div className="countdown-box">
			{counter.years > 0 && (
				<div className="counter">
					<span>Years</span>
					<span className="digit">{counter.years.toString().padStart(2, "0")}</span>
				</div>
			)}
			{counter.months > 0 && (
				<div className="counter">
					<span>Months</span>
					<span className="digit">{counter.months.toString().padStart(2, "0")}</span>
				</div>
			)}
			{counter.days > 0 && (
				<div className="counter">
					<span>Days</span>
					<span className="digit">{counter.days.toString().padStart(2, "0")}</span>
				</div>
			)}
			<div className="counter">
				<span>Hours</span>
				<span className="digit">{counter.hours.toString().padStart(2, "0")}</span>
			</div>
			<div className="counter">
				<span>Minutes</span>
				<span className="digit">{counter.minutes.toString().padStart(2, "0")}</span>
			</div>
			<div className="counter">
				<span>Seconds</span>
				<span className="digit">{counter.seconds.toString().padStart(2, "0")}</span>
			</div>
		</div>
	)
}

export default Countdown
