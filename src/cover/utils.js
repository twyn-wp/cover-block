/**
 * Returns a CSS style object when the value differs from its default.
 * This keeps default values out of the saved block markup.
 *
 * @param {string} property     CSS (custom) property name .
 * @param {string} value        Current property value.
 * @param {string} defaultValue Default property value.
 *
 * @return {Object} Style object containing the (custom) property, or an empty object.
 */

export function getStyleObjectIfNotDefault( property, value, defaultValue ) {
	if (
		value === defaultValue ||
		value === undefined ||
		value === null ||
		value === ''
	) {
		return {};
	}

	return {
		[ property ]: value,
	};
}
