/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 $(document).ready(() => {

const renderTweets = (tweet) => {
  //  function joins the converted tweet data into one continuous html string
  //   and attaches it to the page
  let htmlString = '';
  tweet.forEach((elm) => {
  htmlString = createTweetElement(elm) + htmlString;
  });
// emptying pervious tweeter string before adding new one.
  $('#all-tweets').empty();
  let $tweets = $('#all-tweets').prepend(htmlString);
  return $tweets;
}


const createTweetElement = (tweetobj) => {
  const html_data =
    `<article class="tweets-article">
       <header>
         <div class="header-content">
           <img class="avatarclass" src="${tweetobj.user.avatars.small}">
           <h2 class="username">${tweetobj.user.name}</h2>
           <h5 class="handle">${tweetobj.user.handle}</h5>
        </div>
      </header>

        <div class="message">${tweetobj.content.text}</div>

      <footer>
        <p>${tweetobj.created_at} days ago</p>

         <div class="footer-icons">

           <span class="icons-rows">
             <i class="fa fa-flag fa-lg"></i>
             <i class="fa fa-coffee fa-lg"></i>
             <i class="fa fa-heart fa-lg"></i>
           </span>

         </div>

      </footer>

  </article>`

  return html_data;
}



// function called loadTweets that is responsible for fetching tweets from /tweets

const loadTweets = () => {

$.ajax({
  //uses jQuery to make a request to /tweets
  method: 'GET',
  url: '/tweets',
  // receives the array of tweets as JSON
  dataType: 'json',
  success: (tweet) => {
    //calling up the renderTweets function b/c it takes in the array of objexts
    //and renders them to the DOM
    renderTweets(tweet);
    }
  })
}

loadTweets()



const tweetSubmit = () => {
  var form = $("#new-tweet-form");
  // process my form
  form.submit(function(event) {
      event.preventDefault();

      const input = $('#textarea').val();
        if (input === '' || null) {
          $("#error").text("Got nothing to say? Tweet about it!");
            return error;
        };

        if (input.length > 140) {
          $("#error").text("Say more with less :)");
            return error;
        };
    //process the form with ajax
      $.ajax({
        method: 'POST', // defines the type of HTTP verb I want to use
        url: "/tweets", // the url where I want to post
        data: form.serialize(), // my data object - serilize function acts on my
        // object and creates a text string in standard URL-encoded notation
        success: (tweet) => {
          loadTweets();
        }
      })
  });
}




tweetSubmit(); // calling my function

$('#compose-button').on('click', function(evnt) {
  $('#new-tweet').slideToggle();
  $('#new-tweet textarea').focus();
 });


});
