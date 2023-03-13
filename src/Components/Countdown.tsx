import styled from "@emotion/styled";
import { ITimeCalculation } from "../Functions/TimeCalculation";

interface Props {
	counter: ITimeCalculation;
}

const Countdown = ({ counter }: Props) => {
	const CountdownBox = styled.div({
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		flexWrap: 'wrap',
		height: 100,
		gap: 25,
		marginTop: 10,
		overflow: 'hidden',
		textShadow: '0px 0px 10px black',
	});

	const Counter = styled.div({
		display: 'flex',
		flexDirection: 'column-reverse',
	});

	const Digit = styled.span({
		fontSize: '1.5em',
		fontWeight: 'bold',
	});

	return (
		<CountdownBox>
			<Counter>
				<span>Years</span>
				<Digit>{counter.years.toString().padStart(2, '0')}</Digit>
			</Counter>
			<Counter>
				<span>Months</span>
				<Digit>{counter.months.toString().padStart(2, '0')}</Digit>
			</Counter>
			<Counter>
				<span>Days</span>
				<Digit>{counter.days.toString().padStart(2, '0')}</Digit>
			</Counter>
			<Counter>
				<span>Hours</span>
				<Digit>{counter.hours.toString().padStart(2, '0')}</Digit>
			</Counter>
			<Counter>
				<span>Minutes</span>
				<Digit>{counter.minutes.toString().padStart(2, '0')}</Digit>
			</Counter>
			<Counter>
				<span>Seconds</span>
				<Digit>{counter.seconds.toString().padStart(2, '0')}</Digit>
			</Counter>
		</CountdownBox>
	);
}

export default Countdown;
