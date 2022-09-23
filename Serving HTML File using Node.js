const http = require("http");
const fs = require("fs");
const fileContent = fs.readFileSync("read.html"); 

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'text/html'});
    res.end(fileContent);
})

// Our server will run on our localhost (if port is 80) --> (http://127.0.0.1/)
server.listen(80, '127.0.0.1', () => {
    console.log("Listening on port 80");
})

// If we use port 8000 instead of 80, it will not run on our localhost directly, we'll have to explicitly mention port 8000 (http://127.0.0.1:8000/)
