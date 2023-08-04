import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		VitePWA({
			registerType: 'autoUpdate',
			includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
			manifest: {
				"short_name": "Next Election",
				"name": "The Next Election UK",
				"description": "Awaiting the next government, or to watch the current grow stronger? Keep an eye on the countdown",
				"icons": [
					{
						"src": "icon.png",
						"type": "image/png",
						"sizes": "144x144",
						"purpose": "any"
					}
				],
				"start_url": ".",
				"display": "standalone",
				"theme_color": "#070037",
				"background_color": "#070037"
			},
		})
	],
	server: {
		host: true,
		port: 3000
	},
})
