const express = require('express');

const app =express();

const port = 8000;

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("<h1>Home page</h1>")
})
app.post("/add",(req,res)=>{
    console.log(req.body);
    res.send("<h1>Added successfully</h1>");
})

app.listen(port,()=>{
    console.log("listening on port 8000");
})
