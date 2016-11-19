"use strict";


// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {
      simulateDelay(() => {
        db.tweets.push(newTweet);
        callback(null, true);
      });
    },



    // Get all tweets in `db`, sorted by newest first

    getTweets: function (callback) {
      var records = db.collection("tweets")
      records.find().toArray(function(err, results) {
      console.log("Found the following records:", results);
      callback(results.sort(function (a, b) {
      return a.created_at - b.created_at;
      }));
      });
   };


 };
};
