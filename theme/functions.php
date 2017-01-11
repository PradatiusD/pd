<?php

include_once(get_template_directory() . '/lib/init.php');

define('CHILD_THEME_NAME', 'Daniel Prada Child Theme');
define('CHILD_THEME_URL', 'http://github.com/PradatiusD/dprada');
define('CHILD_THEME_VERSION', '1.1.0');

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

wp_enqueue_style('google-font', 'https://fonts.googleapis.com/css?family=Oswald|Roboto:400,400i,700', array(), '1.0.0', 'all');

add_action( 'genesis_entry_header', 'featured_post_image', 8);
function featured_post_image() {
    ob_start();
  ?>
  <a href="<?php echo get_the_permalink();?>" class="featured-img-container">
    <?php echo the_post_thumbnail('post-image', array('class'=>'img-responsive')); ?>
  </a>

  <?php
  echo ob_get_clean();
}

function theme_scripts () {
  wp_enqueue_script('angular', 'https://ajax.googleapis.com/ajax/libs/angularjs/1.6.1/angular.min.js', array(), '1.6.1', true);
  wp_enqueue_script('twitter-feed', get_stylesheet_directory_uri() . "/twitter-feed.js", array('angular'), '1.0.0', true);
}

add_action('wp_enqueue_scripts', 'theme_scripts');

class Twitter_Widget extends WP_Widget {

  public function __construct () {
    $widget_ops = array( 
      'classname' => 'Twitter_Widget',
      'description' => 'Custom Twitter Widget',
    );
    parent::__construct( 'Twitter_Widget', 'Twitter Widget', $widget_ops );
  }

  public function widget($args, $instance) {
    ?>
      <section ng-app="twitter-feed" id="custom-twitter-timeline" data-base-theme-uri="<?php echo get_stylesheet_directory_uri();?>">
        <div ng-controller="TwitterFeedController">
          <h3>Latest Tweets</h3>
          <article ng-repeat="tweet in tweets">

            <div>     
              <img ng-src="{{tweet.retweeted ? tweet.retweeted_status.user.profile_image_url: tweet.user.profile_image_url}}" class="pull-left twitter-user">
              <strong>{{tweet.retweeted ? tweet.retweeted_status.user.name : tweet.user.name}}</strong><br>
              <small class="text-muted">@{{tweet.retweeted ? tweet.retweeted_status.user.screen_name : tweet.user.screen_name}}</small>
            </div>

            <p>
              <span ng-bind-html="tweet.text | tweet | to_trusted"></span><br>
              <small class="text-muted text-right" style="display: block;">{{tweet.created_at | date:'MMM d, h:mm a'}}</small>
            </p>
            <hr>
          </article>
        </div>
      </section>
    <?php
  }
}

add_action( 'widgets_init', function(){
  register_widget( 'Twitter_Widget' );
});