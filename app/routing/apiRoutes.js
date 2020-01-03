// DEPENDENCIES
var friendsData = require("../data/friends.js");

//ROUTE 1
module.exports = function(app) {
//GET REQUEST
app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });
app.post("/api/friends", function(req,res){
    console.log(req.body);



    
});

// MATCH BIMMERBUDS

var bestMatch = {
    userName: "",
    photo: "",
    friendDiff: Infinity
  };

  var userData = req.body;
  var userScores = userData.scores;