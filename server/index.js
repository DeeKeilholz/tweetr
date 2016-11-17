"use strict";

const PORT        = 8080;
const express     = require("express");
const morgan = require('morgan');
const bodyParser  = require("body-parser");
const app         = express();


const tweetsApi  = require('./api/tweets');
const db         = require('./lib/db');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(morgan('dev'));

db.connect((dbInstance) => {
  app.use('/tweets', tweetsApi(dbInstance));
});

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
