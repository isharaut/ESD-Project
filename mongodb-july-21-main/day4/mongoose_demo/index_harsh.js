const express = require('express');
const port = 8088;

const user_model = require('./users_module');
const User = user_model.User;

const app = express();
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("Hello Friends..")
});

 /* 
 Operation === method
 INSERT == POST
  READ == GET
  UPDATE == UPDATE
  DELETE == DELETE */

app.get("/user", async (req, res)=>{
    let data = await User.find();
    res.send(data);
})

app.post("/user", async (req, res) => {
	console.log(req.body)
	let u = await User(req.body);
	let result = u.save();
	res.send(req.body);
});


app.listen(port, function(){
    console.log(`Listening to Port ${port}`);
});