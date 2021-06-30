<?php 

/* 
Plugin Name: Profile Block
Description: A block that accepts a name header, an image, detail list and description for quick profile creation.
Version: 1.0.0
Author: Craig5117
Author URI: https://craigbennett-reaction.herokuapp.com/
*/

// exit if accessed directly

if( ! defined('ABSPATH') ) exit;

class ProfileBlock {
    function __construct() {
        add_action('enqueue_block_editor_assets', array($this, 'adminAssets'));
    }

    function adminAssets() {
        wp_enqueue_script('profileBlock', plugin_dir_url(__FILE__) . './build/index.js', array('wp-blocks', 'wp-element', 'wp-block-editor'));
    }
}

$profileBlock = new ProfileBlock();