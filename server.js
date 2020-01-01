// DEPENDENCIES (GLOBAL)

var express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(_dirname = "/app/public/"));

