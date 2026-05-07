/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */

import metadata from './block.json';

export const TAG_NAME_OPTIONS = metadata.attributes.tagName.enum.map(
	( tag ) => {
		// Add "Default" to the label for the default div tag (same behavior as core/group)
		if ( tag === 'div' ) {
			tag = `Default (<${ tag }>)`;
		} else {
			tag = `<${ tag }>`;
		}

		return {
			label: tag,
			value: tag,
		};
	}
);
