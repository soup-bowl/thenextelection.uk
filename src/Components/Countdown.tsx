import { CSSProperties } from "react";
import { ITimeCalculation } from "../Functions/TimeCalculation";

interface Props {
	counter: ITimeCalculation;
}

const Countdown = ({ counter }: Props) => {
	const boxStyling: CSSProperties = {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		flexWrap: 'wrap',
		height: 100,
		gap: 25,
		marginTop: 10,
		overflow: 'hidden',
		textShadow: '0px 0px 10px black',
	};

	const segmentStyling: CSSProperties = {
		display: 'flex',
		flexDirection: 'column-reverse',
	};

	const timeStyling: CSSProperties = {
		fontSize: '1.5em',
		fontWeight: 'bold',
	};

	return (
		<div style={boxStyling}>
			<div style={segmentStyling}>
				<span>Years</span>
				<span style={timeStyling}>
					{counter.years.toString().padStart(2, '0')}
				</span>
			</div>
			<div style={segmentStyling}>
				<span>Months</span>
				<span style={timeStyling}>
					{counter.months.toString().padStart(2, '0')}
				</span>
			</div>
			<div style={segmentStyling}>
				<span>Days</span>
				<span style={timeStyling}>
					{counter.days.toString().padStart(2, '0')}
				</span>
			</div>
			<div style={segmentStyling}>
				<span>Hours</span>
				<span style={timeStyling}>
					{counter.hours.toString().padStart(2, '0')}
				</span>
			</div>
			<div style={segmentStyling}>
				<span>Minutes</span>
				<span style={timeStyling}>
					{counter.minutes.toString().padStart(2, '0')}
				</span>
			</div>
			<div style={segmentStyling}>
				<span>Seconds</span>
				<span style={timeStyling}>
					{counter.seconds.toString().padStart(2, '0')}
				</span>
			</div>
		</div>
	);
}

export default Countdown;