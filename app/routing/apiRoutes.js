var friendsData = require("../data/friends");

module.exports = function(app) {
  // API GET Requests - get friends data
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {
    //need to add logic
  });
};
