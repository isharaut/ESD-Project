var express = require("express");
//npm i express

//mongodb://127.0.0.1:27017

var app = express();
const port = 8088;

var user_module = require("./emp_module");
const user = user_module.User;


//add middleware
app.use(express.json());


app.get("/usr", async (req, res) => {
	
	let data = await user.find();
	res.send(data);
});


app.get("/calc", function(req, res) {
	console.log(req.body);
	var x = req.body.num1;
	var y = req.body.num2;
	
	result = {"addition": x + y};
	res.send(result);
});

app.post("/calc", function(req, res) {
	console.log(req.body);
	var x = req.body.num1;
	var y = req.body.num2;
	
	result = {"subtraction": x - y};
	res.send(result);
});

app.put("/calc", function(req, res) {
	console.log(req.body);
	var x = req.body.num1;
	var y = req.body.num2;
	
	result = {"Mult": x * y};
	res.send(result);
});

app.delete("/calc", function(req, res) {
	console.log(req.body);
	var x = req.body.num1;
	var y = req.body.num2;
	
	result = {"Div": x / y};
	res.send(result);
});


//app.get(url, function);
app.get("/", (req, res) => {
	res.send("Hello Express API");
});

//URI = URL + method
app.get("/user", (req, res) => {
	console.log("testing....");
	res.send("Hello User");
});

app.listen(port, function() {
	
	console.log(`Listening to port ${port}`);
	
});


/*
var calc = require("./mymodule");

console.log("Hello Node.js");

console.log(calc.add(5, 6));
console.log(calc.sub(5, 6));
console.log(calc.product(5, 6));
*/
//to run from terminal 
//node index.js