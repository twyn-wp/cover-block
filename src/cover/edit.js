/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorAdvancedControls,
} from '@wordpress/block-editor';
import { SelectControl } from '@wordpress/components';

/**
 * Internal dependencies
 */
import './editor.scss';
import { TAG_NAME_OPTIONS, TAG_HELP_TEXT } from './constants.js';

export default function Edit( { attributes, setAttributes } ) {
	// * Attributes
	const { tagName } = attributes;

	// * Derived State
	const TagName = tagName;

	// * Block Props
	const blockProps = useBlockProps();

	// * Handlers
	const onChangeTagName = ( newTagName ) => {
		setAttributes( { tagName: newTagName } );
	};

	return (
		<>
			<InspectorAdvancedControls>
				<SelectControl
					__next40pxDefaultSize
					__nextHasNoMarginBottom="true"
					label="HTML-Element"
					value={ tagName }
					options={ TAG_NAME_OPTIONS }
					onChange={ onChangeTagName }
					help={ TAG_HELP_TEXT[ tagName ] }
				/>
			</InspectorAdvancedControls>
			<TagName { ...blockProps }>
				{ __( 'Hello from edit.js', 'twyn-cover-block' ) }
			</TagName>
		</>
	);
}
