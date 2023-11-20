const express = require('express');

const port = 3000;
const app = express();
app.get("/",respondText);
app.get("/json",respondJson)
app.get("*",respondNotFound)
function respondText(req,res){
  res.send("HI from express server");  
}
function respondJson(req,res){
    res.json({name:"Ben thomas",age:23})
}
function respondNotFound(req,res){
    res.send("Page you are trying to access is not available")
}
app.listen(port,()=>{
    console.log("Listening on port 3000");
});