/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {

  var $container = $('#all-tweets');

  for(tweet of tweets){
  	var $tweet = $("<div>").addClass("tweet")
     .append($("<div>").text(tweet.article-header))
     .append($("<div>").text(tweet.article-body))
     .append($("<div>").text(tweet.article-footer));

    $container.append($tweet);
  }


});
