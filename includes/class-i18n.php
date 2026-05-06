<?php
/**
 * Translation loading for the plugin.
 *
 * @package twyn\CoverBlock
 */

namespace Twyn\CoverBlock;

/**
 * Handles plugin internationalization.
 */
class I18n {

	/**
	 * The directory for plugin languages files.
	 *
	 * @var string
	 */
	private string $languages_dir_path;

	/**
	 * Loads the plugin translations.
	 * The constructor hooks the load_textdomain method to the 'init' action, ensuring that
	 * translations are loaded at the appropriate time in the WordPress lifecycle.
	 *
	 * @param string $path - The relative path to the languages directory for loading translation files.
	 */
	public function __construct( string $path ) {
		$this->languages_dir_path = $path;
		add_action( 'init', array( $this, 'load_textdomain' ) );
	}

	/**
	 * Registers the text domain for translations.
	 */
	public function load_textdomain(): void {
		load_plugin_textdomain(
			'twyn-cover-block',
			false,
			$this->languages_dir_path
		);
	}
}
