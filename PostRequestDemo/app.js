var express = require("express");
var app= express();
//app.use(express.static("public"));
var bodyp = require("body-parser");
app.use(bodyp.urlencoded({extended: true}));

app.set("view engine", "ejs");

var heros =["katarina", "ashe", "darius", "kaisa", "zed"];

app.get("/", function(req, res){
	res.render("home");
})

app.post("/addhero", function(req, res){
	var newhero = req.body.newhero;
	heros.push(newhero);
	res.redirect("/todo");
})

app.get("/todo", function(req, res){
	
	res.render("todo", {heros: heros});
})


app.get("*", function(req,res){
	res.send("JATI REJE!!!! HUEHUEHUEHUE")
});

app.listen(3000, function(){
	console.log("WOKAY PORT 3K");
});