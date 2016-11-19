"use strict";


// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: function (data, callback) {
      db.collection("tweets").insertOne(data, function (err, result) {
        if (err) {
          console.log("Something is not working: ", err);
        }
        callback(err)
      })
    },




    // Get all tweets in `db`, sorted by newest first

    getTweets: function (callback) {
      var records = db.collection("tweets")
      records.find().toArray(function(err, results) {
      console.log("Found the following records:", results);
      callback(err, results)
      })
   }


 };
};
