module.exports = function setUpDatabase(callback) {

  const {MongoClient} = require("mongodb");
  const MONGODB_URI = "mongodb://localhost:27017/tweeter";

  MongoClient.connect(MONGODB_URI, (err, db) => {
    if (err) {
      console.error(`Failed to connect: ${MONGODB_URI}`);
      throw err;
    }
    callback(db)
  })

}
