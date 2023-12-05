const express = require('express');

const app =express();

const port = 8000;
const jsonarray = [];
app.use(express.json());
app.get("/",(req,res)=>{
    res.cookie("visit",true,{
        maxAge:60000
    })
    res.send("<h1>Home page</h1>")
})
app.post("/add",(req,res)=>{
    console.log(req.body);
    jsonarray.push(req.body);
    res.send("<h1>Added successfully</h1>");
})
app.get("/array",(req,res)=>{
    res.send(jsonarray);
})
app.listen(port,()=>{
    console.log("listening on port 8000");
})
