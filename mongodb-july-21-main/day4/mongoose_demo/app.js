//Step 1: Database connection
const mongoose = require("mongoose");

//mongodb://127.0.0.1:27017/dbname
const conn_str = "mongodb://localhost:27017/tcet";

mongoose.connect(conn_str, { useNewUrlParser: true, useUnifiedTopology: true })
	.then( () => console.log("Connected successfully...") )
	.catch( (error) => console.log(error) );
	
	
//Step 2: Create Schema (Java Class)
const userSchema = new mongoose.Schema({
	name: String,
	age: Number,
	city: String
})

//Step 3: Create collection Object (model)
// MAPPING 
const userObject = new mongoose.model("users", userSchema);


//Step 4: insert document in users collection
const u1 = new userObject({name: "rajiv", age: 21, city: "mumbai"});
//u1.save();
