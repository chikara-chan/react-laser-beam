/**
 * Output the message of warning in console
 * @param  {String} message
 */
export default function warning(message) {
	if (typeof console !== 'undefined' && typeof console.error === 'function') {
		console.error(message)
	}
}
