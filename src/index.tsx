import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import App from './Page/App';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);

serviceWorkerRegistration.register();

reportWebVitals();
