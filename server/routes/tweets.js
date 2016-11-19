"use strict";

const userHelper    = require("../lib/util/user-helper");
const express       = require('express');
const tweetsRoutes  = express.Router();

//exports a function that returns an object (tweetsRoutes) - which is what we want
//to export

module.exports = function(DataHelpers) {

//get route retrieves tweets
  tweetsRoutes.get("/", function(req, res) {
    //route handler for tweetsRoutes.get calls DataHelpers.getTweets()
    DataHelpers.getTweets((err, tweets) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(tweets);
      }
    });
  });

// post route should create a new tweet
  tweetsRoutes.post("/", function(req, res) {
    if (!req.body.text) {
      res.status(400).json({ error: 'invalid request: no data in POST body'});
      return;
    }

    const user = req.body.user ? req.body.user : userHelper.generateRandomUser();
    const tweet = {
      user: user,
      content: {
        text: req.body.text
      },
      created_at: Date.now()
    };
//route handler for tweetsRoutes.post("/", ...) calls DataHelpwers.saveTweet()
    DataHelpers.saveTweet(tweet, (err) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(201).send();
      }
    });
  });
//the tweetsRoutes object depends upon the DataHelpers argument, and it's being
// passed in (injected) from the outside.
  return tweetsRoutes;

}
