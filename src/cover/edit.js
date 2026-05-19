/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	InspectorAdvancedControls,
} from '@wordpress/block-editor';
import { SelectControl } from '@wordpress/components';

/**
 * Internal dependencies
 */
import './editor.scss';
import { UnitControl } from './components/UnitControl.js';
import {
	TAG_NAME_OPTIONS,
	TAG_HELP_TEXT,
	DEFAULT_MIN_HEIGHT,
	MIN_HEIGHT_VAR,
	MIN_HEIGHT_UNITS,
} from './constants.js';
import { getStyleObjectIfNotDefault } from './utils.js';

export default function Edit( { attributes, setAttributes } ) {
	// * Attributes
	const { tagName, minHeight } = attributes;

	// * Derived State
	const TagName = tagName;

	// * Block Props
	const style = {
		...getStyleObjectIfNotDefault(
			MIN_HEIGHT_VAR,
			minHeight,
			DEFAULT_MIN_HEIGHT
		),
	};

	const blockProps = useBlockProps( {
		style,
	} );

	// * Handlers
	const onChangeTagName = ( newTagName ) => {
		setAttributes( { tagName: newTagName } );
	};

	const onChangeMinHeight = ( newValue ) => {
		setAttributes( { minHeight: newValue } );
	};

	return (
		<>
			<InspectorControls group="dimensions">
				<div style={ { gridColumn: '1/-1' } }>
					<UnitControl
						label={ __(
							'min Height (Default: 250px)',
							'twyn-cover-block'
						) }
						__next40pxDefaultSize
						onChange={ onChangeMinHeight }
						value={ minHeight }
						units={ MIN_HEIGHT_UNITS }
					/>
				</div>
			</InspectorControls>
			<InspectorAdvancedControls>
				<SelectControl
					__next40pxDefaultSize
					__nextHasNoMarginBottom
					label={ __( 'HTML element', 'twyn-cover-block' ) }
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
