// importing the module http
const http = require('http');
// const port = process.env.PORT || 1337;
const server = http.createServer(function(req,res){
    console.log("request listener function");
    console.log(req.url);
    // res.setHeader("Content-Type","text/plain");
    // res.write("Hi from the server");
    // res.setHeader("Content-Type","application/json")
    // res.write(JSON.stringify({name:"Bill",age:23}))
    // res.end("Hi from the server");
    if(req.url === "/"){
        respondText(req,res);
    } else if(req.url === "/person"){
        respondJson(req,res);
    } else{
        respondNothing(req,res);
    }
    res.end();
})
server.listen(3000,()=>{
    console.log("starting the server");
});
// console.log(`server running on port ${port}`);

function respondText(req,res){
    res.setHeader("Content-Type","text/plain");
    res.write("Hi from the server");
}

function respondJson(req,res){
    res.setHeader("Content-Type","application/json")
    res.write(JSON.stringify({name:"Bill",age:23}))
}

function respondNothing(req,res){
    res.writeHead(404,"Nothing found");
    res.write("Nothing found");
}