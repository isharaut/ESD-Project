var mongoose = require("mongoose");

var conn_string = "mongodb://127.0.0.1:27017/tcetdb";

mongoose.connect(conn_string, { useNewUrlParser: true, useUnifiedTopology: true });

//create schema this will require to perform CRUD operations
const userSchema = new mongoose.Schema({
	name: String,
	address: String,
	salary: Number
});

//create collection model
const UserModel = new mongoose.model("users", userSchema);

exports.User = UserModel;