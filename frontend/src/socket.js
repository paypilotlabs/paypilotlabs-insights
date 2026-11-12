import { io } from 'socket.io-client'

export function initSocket() {
	let socketio_port = window.socketio_port || 9000
	let host = window.location.hostname
	let siteName = import.meta.env.DEV ? host : window.site_name
	// A production build reaches socket.io through the page's own origin (the web server
	// proxies /socket.io). Only the Vite dev server runs apart, so it uses socketio_port.
	let url = import.meta.env.DEV
		? `http://${host}:${socketio_port}/${siteName}`
		: `${window.location.origin}/${siteName}`

	let socket = io(url, {
		withCredentials: true,
		reconnectionAttempts: 5,
	})
	return socket
}
