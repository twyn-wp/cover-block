/**
 * WordPress dependencies
 */

import { useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */

import { DEFAULT_MIN_HEIGHT, MIN_HEIGHT_VAR } from './constants.js';
import { getStyleObjectIfNotDefault } from './utils.js';

export default function save( { attributes } ) {
	// * Attributes
	const { tagName: TagName, minHeight } = attributes;

	// * Block props

	const style = {
		...getStyleObjectIfNotDefault(
			MIN_HEIGHT_VAR,
			minHeight,
			DEFAULT_MIN_HEIGHT
		),
	};

	const blockProps = useBlockProps.save( {
		style,
	} );

	return <TagName { ...blockProps }>{ 'hello from save.js' }</TagName>;
}
