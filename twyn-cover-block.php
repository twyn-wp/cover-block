<?php
/**
 * Plugin Name:       Twyn Cover Block
 * Description:       A custom Gutenberg block that creates an overlay on images or videos.
 * Requires at least: 6.3
 * Requires PHP:      7.4
 * Version:           0.1.0
 * Author:            Tony Nguyen
 * Author URI:        https://github.com/TonyNguyen137
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       twyn-cover-block
 * Domain Path:       /languages
 *
 * @package           twyn-cover-block
 */

namespace Twyn\CoverBlock;

defined( 'ABSPATH' ) || exit;
define( 'TWYN_COVER_BLOCK_ROOT_PATH', plugin_dir_path( __FILE__ ) );
define( 'TWYN_COVER_BLOCK_LANGUAGES_PATH', 'twyn-cover-block/languages' );

require_once TWYN_COVER_BLOCK_ROOT_PATH . 'includes/class-i18n.php';
require_once TWYN_COVER_BLOCK_ROOT_PATH . 'includes/class-cover-block-registration.php';


new Cover_Block_Registration( TWYN_COVER_BLOCK_ROOT_PATH );
new I18n( TWYN_COVER_BLOCK_LANGUAGES_PATH );
