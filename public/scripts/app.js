/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {

  // var $container = $('#all-tweets');
//tweets is an empty array when JS loads
  var tweets = []

  function renderTweets () {
    let $el = $('#all-tweets');
    //creates a string that will be html we insert
    let html = "";
    // loop through tweets function for each instance append string to html
    // string, and append name of tweet
    tweets.forEach((tweet)) => {
      html += <li><a href="#">$(tweet.name)</a></li>
    })
    // append call
    $el.append(html)
  }

  $(document).ready(() => {

    $.ajax('/tweets', {
      method: 'GET'
    }).done((data) =>
    tweets = data
    renderTweets()
  })





  for(tweet of tweets){
  	var $tweet = $("<div>").addClass("tweet")
     .append($("<div>").text(tweet.article-header))
     .append($("<div>").text(tweet.article-body))
     .append($("<div>").text(tweet.article-footer));

    $container.append($tweet);
  }


});
