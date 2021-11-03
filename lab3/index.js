var http = require("http");
let Employee = require('./Employee')


console.log("Lab 03 -  NodeJs");
const port = process.env.PORT || 5050

const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
           res.write("<h1>Welcome to Lab Exercise 03</h1>")
           res.end()
        }

        if (req.url === '/employee') {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(Employee.fullName())
            res.end()
        }

        if (req.url === '/employee/names') {
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write(JSON.stringify(Employee.names()))
            res.end()
        }

        if (req.url === '/employee/totalsalary') {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(Employee.totalSalary())
            res.end()
            
    }
    res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})