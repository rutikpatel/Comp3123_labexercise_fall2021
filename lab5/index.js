const express = require('express');
const app = express();
const router = express.Router();
var user1 = require("./user.json");

/*
- Create new html file name home.html 
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/

router.get('/home', (req,res) => {
  res.sendFile(__dirname + '/home.html')
});

/*
- Return all details from user.json file to client as JSON format
*/
router.get('/profile', (req,res) => {
  res.writeHead(200,{"content-Type":"text/json"});
  res.send('This is profile router');
  res.end(JSON.stringify(user1));
});


router.get('/login', (req,res) => {
  let username = req.query.username;
  let password = req.query.password;
  let success = {
    status: true,
    message: "User Is valid"
  }
  let errorUser={
    status: false,
    message: "User Name is invalid"
  };
  let errorPassword={
    status: false,
    message: "Password is invalid"
  };
  if(user1.username === username && user1.password === password){
    res.send(success);
  }
  else if(user1.username !== username && user1.password === password){
    res.send(errorUser);
  }
  else if(user1.username === username && user1.password !== password){
    res.send(errorPassword);
  }
  else{
    res.send("Username or password invalid");
  }
});

/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
router.get('/logout/:username', (req,res) => {
  let username = req.params.username;
if(user1.username === username){
  res.send(`<h1><b>User: ${username} successfully logout</b></h1>`);
}
else{
  res.send(`<h1><b>Invalid user: ${username}</b></h1>`);
}
});

app.use('/', router);

app.listen(process.env.port || 8081);

console.log('Web Server is listening at port '+ (process.env.port || 8081));