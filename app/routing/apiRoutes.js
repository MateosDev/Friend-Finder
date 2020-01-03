// DEPENDENCIES
var friendsData = require("../data/friends.js");

//ROUTE 1
module.exports = function (app) {
        //GET REQUEST
        app.get("/api/friends", function (req, res) {
            res.json(friendsData);
            app.post("/api/friends", function (req, res) {
                console.log(req.body);
                
                
                
                
            });
            
            // MATCH BIMMERBUDS
            
            var bestMatch = {
                buddyBadge: "",
                photo: "",
                friendDiff: Infinity
            };
            
            var buddyData = req.body;
            var buddyScores = buddyData.scores;
            
            var totalDiff;
            for (var i = 0; i < friendsData.length; i++) {
                var currentBuddy = friendsData[i];
                totalDiff = 0;
                // console.log(currentBuddy.buddyBadges);
                
                for (var j = 0; j < currentBuddy.scores.length; j++) {
                    var currentBuddyScore = currentBuddy.scores[j];
                    var currentUserScore = buddyScores[j];
                    
                    totalDiff += Math.abs(
                        parseInt(currentUserScore) - parseInt(currentBuddyScore)
                        );
                    }
                    
                    if (totalDiff <= bestMatch.friendDiff) {
                        bestMatch.buddyBadge = currentBuddy.buddyBadge;
                        bestMatch.photo = currentBuddy.photo;
                        bestMatch.friendDiff = totalDiff;
                        
                    }
                }
                
                friendsData.push(buddyData);
                
                res.json(bestMatch);
            });
            }