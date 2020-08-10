console.log("HLO");

var express = require('express');
var app=express()

app.get("/", function(req, res){
	res.send("HELLO JI");
});

app.get("/bye", function(req, res){
	res.send("JATI REJE!");
});

app.listen(3000, function(){
	console.log("WOKAY PORT 3K");
});