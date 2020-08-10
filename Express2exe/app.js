var express = require('express');
var app=express()

var sounds = {
    "dog" : "BHAU BHAU",
    "cat" : "MEEEYAAAW",
    "snake" : "Assignment check krva ke aaya",
    "valsadian" : "PACHAT PACHAT",
}

app.get("/", function(req,res){
	res.send("HELLO JI, AAIYE PADHARIYE")
});

app.get("/speak/:hero", function(req,res){
	var heros = req.params.hero;
	var sound = sounds[heros];
	res.send("The " +heros +" say"+ sound);
});

app.get("/repeat/:word/:number", function(req,res){
	var words = req.params.word;
	var num = parseInt(req.params.number);
	var str = " ";
	for(var i=0; i<num; i++){
		str = str + ' ' +words;
	}
	res.send(str);	
});

app.get("*", function(req,res){
	res.send("JATI REJE!!!! HUEHUEHUEHUE")
});

app.listen(3000, function(){
	console.log("WOKAY PORT 3K");
});