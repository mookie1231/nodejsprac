
const express = require("express")
const app = express()
const path = require("path")
const port = 3000;

app.use(express.static('public'));

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname,'public', 'about.html'))
})

app.get("/about", (req,res) => {

    res.sendFile(path.join(__dirname,'public', 'index.html'))
})

app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname,'public', 'index.html'))
})

app.listen(port, () => {
    console.log(`We are always listening in on ${port}`)
})




