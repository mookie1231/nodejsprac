const http = require('http');
const fs = require('fs'); 

const server = http.createServer((req, res) => {
    fs.readFile('contact.html', (err, data) => {  
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    });

    
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});



const express = require("express")
const app = express()
const port = 3000;

app.get("/", (req,res) => {
    res.send("Hello World")
})







