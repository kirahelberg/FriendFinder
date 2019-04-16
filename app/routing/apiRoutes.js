var friendsData = require("../data/friends");

module.exports = function(app) {
  // API GET Requests - get friends data
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {
    var scoreDiff = 40;
    var currDiff = 0;
    var match;

    friendsData.forEach(function(friends) {
      for (var i = 0; i < 10; i++) {
        currDiff += Math.abs(req.body.scores[j] - friends[i].scores[j]);
      }
      console.log(`${i} ${currDifference}`);
      if (currDifference < totalDifference) {
        scoreDiff = currDiff;
        match = friends[i];
      }
      currDifference = 0;
    });
    friendsData.push(req.body);
    res.json(bestMatch);
  });
};
