<?php

include_once('init.php');

wp_enqueue_style('google-font', 'https://fonts.googleapis.com/css?family=Oswald|Roboto:400,400i,700', array(), '1.0.0', 'all');

add_action( 'genesis_entry_header', 'featured_post_image', 8);
function featured_post_image() {
    ob_start();
  ?>
  <a href="<?php echo get_the_permalink();?>" class="featured-img-container">
    <div class="black-gradient"></div>
    <?php echo the_post_thumbnail('post-image', array('class'=>'img-responsive')); ?>
  </a>

  <?php
  echo ob_get_clean();
}

//* Customize the post info function
add_filter( 'genesis_post_info', 'custom_post_metadata_filter' );
function custom_post_metadata_filter ($post_info) {
  if (!is_page()) {
    $post_info = 'Published [post_date]';
    return $post_info;
  }
}

//* Customize the post meta function
add_filter( 'genesis_post_meta', 'sp_post_meta_filter' );
  function sp_post_meta_filter($post_meta) {
  if ( !is_page() ) {
    $post_meta = '[post_categories before=""] [post_tags before="Tagged: "]';
    return $post_meta;
  }
}


function theme_scripts () {
  wp_enqueue_script('font-awesome', 'https://use.fontawesome.com/d85b630b69.js', array(), '4.7.0', false);

  wp_enqueue_script('raphaeljs', get_stylesheet_directory_uri() . '/js/raphael.min.js', array(), '2.2.0', true);
  wp_enqueue_script('circle-animation', get_stylesheet_directory_uri() . '/js/circle-animation.js', array('raphaeljs'), '1.0.0', true);
  // wp_enqueue_script('angular', 'https://ajax.googleapis.com/ajax/libs/angularjs/1.6.1/angular.min.js', array(), '1.6.1', true);
  // wp_enqueue_script('twitter-feed', get_stylesheet_directory_uri() . "/twitter-feed.js", array('angular'), '1.0.0', true);
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

add_action('widgets_init', function (){
  register_widget('Twitter_Widget');
});


//* Change the footer text
add_filter('genesis_footer_creds_text', 'sp_footer_creds_filter');
function sp_footer_creds_filter( $creds ) {
  $profiles = array(
    'github-alt' => 'https://github.com/pradatiusd',
    'twitter' => 'https://twitter.com/pradatiusd',
    'linkedin' => 'https://www.linkedin.com/in/danielprada',
    'android'  =>  'https://play.google.com/store/apps/details?id=pradadesigners.com.tequesta'
  );

  ?>
  <ul class="list-unstyled social-profiles">
    <?php foreach ($profiles as $provider => $url):?>
      <li class="<?php echo $provider;?>">
        <a href="<?php echo $url;?>" target="_blank">
          <i class="fa fa-<?php echo $provider;?>" aria-hidden="true"></i>
        </a>
      </li>
    <?php endforeach;?>
  </ul>
  <?php
  return ob_get_clean();
}

add_action('genesis_site_title', 'add_raphael_interaction', 0);

function add_raphael_interaction () {
  ob_start();?>
    <div id="canvas"></div>
  <?php
  echo ob_get_clean();
}

add_action('genesis_site_title', 'before_title_section', 0);
function before_title_section () {echo '<section class="site-title-container">';}
add_action('genesis_site_description', 'after_description_section', 1000);
function after_description_section () {echo '</section>';}


//* Add Custom Browser Bar Color
add_action('wp_head', 'custom_browser_bar_background');

function custom_browser_bar_background () {

  $color = '#000000';
  $meta_names = array(
    'theme-color',                           // Chrome, Firefox OS and Opera
    'msapplication-navbutton-color',         // Windows Phone
    'apple-mobile-web-app-status-bar-style'  // iOS Safari
  );

  foreach ($meta_names as $meta_key) {
    echo '<meta name="'.$meta_key.'" content="'.$color.'">'.PHP_EOL;
  }
}