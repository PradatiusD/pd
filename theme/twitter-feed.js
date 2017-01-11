(function (){

var app = angular.module('twitter-feed', []);

/*
 * From DevinClark's Angular Tweet Filter
 * -----------------------------------------
 * https://github.com/DevinClark/angular-tweet-filter/blob/master/index.js
 */

app.filter('tweet', function () {
  return function (text) {
    var urlRegex = /((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/g;
    var twitterUserRegex = /@([a-zA-Z0-9_]{1,20})/g;
    var twitterHashTagRegex = /\B#(\w+)/g;

    text = text.replace(urlRegex," <a href='$&' target='_blank'>$&</a>").trim();
    text = text.replace(twitterUserRegex,"<a href='http://www.twitter.com/$1' target='_blank'>@$1</a>");
    text = text.replace(twitterHashTagRegex,"<a href='http://twitter.com/search/%23$1' target='_blank'>#$1</a>");

    return text;
  };
});

app.filter('to_trusted', ['$sce', function($sce){
  return function(text) {
      return $sce.trustAsHtml(text);
  };
}]);

app.controller('TwitterFeedController', function ($http, $scope, $filter) {

  var contentHeight = document.getElementsByClassName('content')[0].clientHeight;
  var feed = document.getElementById('custom-twitter-timeline');

  feed.style.height = (contentHeight - 50) + "px";

  var base = feed.getAttribute("data-base-theme-uri");
  var url  = base + "/twitter_feed.php";

  $http.get(url).then(function (response) {

    $scope.tweets = response.data.map(function (tweet) {
      tweet.created_at = new Date(tweet.created_at);
      return tweet;
    });

  }, function (err) {
    $scope.tweets = [];
    console.log(err);
  });
});

})();