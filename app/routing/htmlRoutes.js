//DEPENDENCIES

var path = require("path");

//HTML ROUTES

module.exports=function(app) {

app.get("/api/friends", function(){
    res.sendFile(path.join(_dirname, "../data/friends.js"));
});

app.get("/survey", function(req,res){
    res.sendFile(path.join(_dirname,"../public/survey.html"));
});

app.get("*", function(req,res){
    res.sendFile(path.join(_dirname, "../public/home.html"));
});

};

