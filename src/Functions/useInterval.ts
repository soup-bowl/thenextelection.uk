import { useEffect, useRef } from "react";

type CallbackFunction = () => void;

const useInterval = (callback: CallbackFunction, delay: number | null): void => {
	const savedCallback = useRef<CallbackFunction | null>(null);

	useEffect(() => {
		savedCallback.current = callback;
	}, [callback]);

	useEffect(() => {
		function tick() {
			if (savedCallback.current) {
				savedCallback.current();
			}
		}
		if (delay !== null) {
			const intervalId = setInterval(tick, delay);
			return () => clearInterval(intervalId);
		}
	}, [delay]);
}

export default useInterval;
