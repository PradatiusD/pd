<?php

include_once(get_template_directory() . '/lib/init.php');

define('CHILD_THEME_NAME', 'Daniel Prada Child Theme');
define('CHILD_THEME_URL', 'http://github.com/PradatiusD/dprada');
define('CHILD_THEME_VERSION', '1.0.3');

//* Add HTML5 markup structure
add_theme_support('html5', array('search-form','comment-form','comment-list','gallery','caption'));

//* Add Meta viewport
add_theme_support('genesis-responsive-viewport');

if (in_array($_SERVER['REMOTE_ADDR'], array('127.0.0.1', '::1'))) {

  ini_set('display_errors', 1);
  ini_set('display_startup_errors', 1);
  error_reporting(E_ALL);
  
  // For live reloading
  function local_livereload() {
    wp_register_script('livereload', 'http://localhost:35729/livereload.js', null, false, true);
    wp_enqueue_script('livereload');    
  }

  add_action( 'wp_enqueue_scripts', 'local_livereload');
}

wp_enqueue_style('google-font', 'https://fonts.googleapis.com/css?family=Oswald|Roboto:400,400i,700', array(), '1.0.0', "all");

