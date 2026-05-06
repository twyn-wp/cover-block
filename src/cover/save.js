/**
 * WordPress dependencies
 */

import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	const blockProps = useBlockProps.save();

	return <p { ...blockProps }>{ 'hello from save.js' }</p>;
}
