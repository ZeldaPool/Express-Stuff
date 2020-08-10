var express = require('express');
var app=express()
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req,res){
	res.render("home");
});

app.get("/woo/:thing", function(req,res){
	var thing= req.params.thing;
	res.render("love", {varthing: thing});
});


app.get("*", function(req,res){
	res.send("JATI REJE!!!! HUEHUEHUEHUE")
});

app.listen(3000, function(){
	console.log("WOKAY PORT 3K");
});