/**
 * WordPress dependencies
 */

import { useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	// * Attributes
	const { tagName: TagName } = attributes;

	// * Block props
	const blockProps = useBlockProps.save();

	return <TagName { ...blockProps }>{ 'hello from save.js' }</TagName>;
}
