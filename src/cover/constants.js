/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */

import metadata from './block.json';

// Use the block metadata enum as the available tag name options.
const tagNames = metadata.attributes.tagName.enum;

export const TAG_NAME_OPTIONS = tagNames.map( ( tag ) => {
	// Add "Default" to the label for the default div tag (same behavior as core/group)
	let label = '';
	if ( tag === 'div' ) {
		label = __( 'Default', 'twyn-cover-block' ) + ` (<${ tag }>)`;
	} else {
		label = `<${ tag }>`;
	}

	return {
		label,
		value: tag,
	};
} );

// Same helper text as the core/group block.
export const TAG_HELP_TEXT = Object.fromEntries(
	tagNames.map( ( key ) => {
		let text = '';

		switch ( key ) {
			case 'div':
				text = __(
					'The <div> element should only be used if the block is a design element with no semantic meaning.',
					'twyn-cover-block'
				);
				break;
			case 'header':
				text = __(
					'The <header> element should represent introductory content, typically a group of introductory or navigational aids.',
					'twyn-cover-block'
				);
				break;
			case 'main':
				text = __(
					'The <main> element should be used for the primary content of your document only.',
					'twyn-cover-block'
				);
				break;

			case 'section':
				text = __(
					"The <section> element should represent a standalone portion of the document that can't be better represented by another element.",
					'twyn-cover-block'
				);
				break;

			case 'article':
				text = __(
					'The <article> element should represent a self-contained, syndicatable portion of the document.',
					'twyn-cover-block'
				);
				break;

			case 'aside':
				text = __(
					"The <aside> element should represent a portion of a document whose content is only indirectly related to the document's main content.",
					'twyn-cover-block'
				);
				break;

			case 'footer':
				text = __(
					'The <footer> element should represent a footer for its nearest sectioning element (e.g.: <section>, <article>, <main> etc.).',
					'twyn-cover-block'
				);
				break;
			default:
				break;
		}

		return [ key, text ];
	} )
);

// Keep these values in sync with style.scss
export const DEFAULT_MIN_HEIGHT = '250px';
export const MIN_HEIGHT_VAR = '--twyn-cover-min-height';

export const MIN_HEIGHT_UNITS = [
	{ value: 'px', label: 'px' },
	{ value: 'rem', label: 'rem' },
];
