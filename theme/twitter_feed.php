<?php
require "lib/autoload.php";
require "config.php";
use Abraham\TwitterOAuth\TwitterOAuth;

$connection = new TwitterOAuth(
  TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET,
  TWITTER_ACCESS_TOKEN,
  TWITTER_ACCESS_TOKEN_SECRET
);

$statuses = $connection->get("statuses/user_timeline", array("count" => 10, "exclude_replies" => true));

header("Content-Type: application/javascript");
echo json_encode($statuses);
die();