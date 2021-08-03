const path = require("path")
const express = require('express');
const app = express();
const port = 8000;
// const http = require('http');

// console.log(path.join(__dirname, "./webd"));
[]
app.use(express.urlencoded({extended: true}))
app.set("view engine", "hbs");

app.get('/', (req, res) =>{
    res.render("webdev.hbs")
})

const staticpath = path.join(__dirname, "./static");


app.use('/static', express.static(path.join(__dirname, "./static")));

// app.get('/', (req, res) =>{
//     res.send("this is the main page of mssaedqrqrqrqry site")
// })

app.get('/about', (req, res) =>{
    res.send("this is the   ABOUT page of my site")
})
app.get('/contact', (req, res) =>{
    res.send("this is the CONTACT page of my site")
})


app.listen(port , () =>{
    console.log(`"server is ready at ${port}  welcome"`)
})