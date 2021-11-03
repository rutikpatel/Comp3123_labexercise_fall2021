let express = require('express')

let app = express()

app.get("/hello",(req,res)=>{
    res.send("<h1>Hello Express JS</h1>")
})

app.get("/user",(req,res)=>{
    let first_name = req.query.fname;
    let last_name = req.query.lname;
    let response = {
        first_name,
        last_name
    }  
    res.send(response)
})

app.post("/user/:fname/:lname",(req,res)=>{
    let first_name = req.params.fname;
    let last_name = req.params.lname;
    let response = {
        first_name,
        last_name
    }  
    res.send(response)
})

let server = app.listen(8080,()=>{
    let host = server.address().address
    let port = server.address().port
    console.log("The server is running at http://%s%s",host,port)
})