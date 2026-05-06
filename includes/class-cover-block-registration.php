<?php
/**
 * Block registration for the Twyn Cover Block.
 *
 * @package Twyn\CoverBlock
 */

namespace Twyn\CoverBlock;

/**
 * Handles registration of the cover block.
 */
class Cover_Block_Registration {

	/**
	 * Absolute path to the plugin root directory.
	 *
	 * @var string
	 */
	private string $plugin_path;

	/**
	 * Sets up the block registration hook.
	 *
	 * @param string $plugin_path Absolute path to the plugin root directory.
	 */
	public function __construct( string $plugin_path ) {
		$this->plugin_path = $plugin_path;

		add_action( 'init', array( $this, 'register_block' ) );
	}

	/**
	 * Registers the cover block from the build directory.
	 */
	public function register_block(): void {
		register_block_type( $this->plugin_path . '/build/cover' );
	}
}
