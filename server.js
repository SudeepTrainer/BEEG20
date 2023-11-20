// importing the module http
const http = require('http');
const queryString = require('querystring')
const fs = require('fs');
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
    } else if(req.url.match(/^\/converttouppercase/)){
        respondConvert(req,res);
    } else if(req.url.match(/^\/files/)){
        respondFile(req,res)
    }else{
        respondNothing(req,res);
    } 
    // res.end();
})
server.listen(3000,()=>{
    console.log("starting the server");
});
// console.log(`server running on port ${port}`);

function respondText(req,res){
    res.setHeader("Content-Type","text/plain");
    res.end("Hi from the server");
}

function respondJson(req,res){
    res.setHeader("Content-Type","application/json")
    res.end(JSON.stringify({name:"Bill",age:23}))
}

function respondNothing(req,res){
    res.writeHead(404,"Nothing found");
    res.end("Nothing found");
}

function respondConvert(req,res){
    // console.log(req.url);// /converttouppercase?input=fsdfs&query=sdff
    // console.log(req.url.split("?"));
    // [ '/converttouppercase', 'input=fsdfs&query=sdff' ]
    // console.log(req.url.split("?").slice(1)); 
    // [ 'input=fsdfs&query=sdff' ]
    // console.log(req.url.split("?").slice(1).join(""));
    // input=fsdfs&query=sdff
    // console.log(queryString.parse(req.url.split("?").slice(1).join("")));
    const {input} = queryString.parse(req.url.split("?").slice(1).join(""));
    // { input: 'fsdfs', query: 'sdff' }
    res.end(input.toUpperCase());
}

function respondFile(req,res){
    // console.log(req.url.split("/files"));
    // const filename = req.url.split("/files")[1];
    // console.log(filename);

    const filename = `${__dirname}/public${req.url.split("/files")[1]}`
    console.log(filename);
    fs.createReadStream(filename)
        .on('error',()=>{respondNothing(req,res)})
        .pipe(res)
}