const express = require('express');
const app = express();
const port = 3000;

//global middleware
function logMiddleware(req,res,next){
    console.log("log middleware called");
    console.log("before");
    if(req.query.user === "admin"){
        next();
    }else{
        res.send("<h1>Only admins can access this page</h1>")
    }
    console.log("after");
}

app.use(logMiddleware);

//default page
const defaultResponse = function (requestObject,responseObject,nextMiddleware){
    console.log("default page route action called");
    responseObject.send("<h1>Default page</h1>")
}

app.get("/",defaultResponse);
//login page
const loginResponse = function(requestObject,responseObject,nextMiddleware){
    console.log("login page route action called");
    responseObject.send("<h1>Login page</h1>")
}

const auth = function(req,res,next){
    console.log("auth called");
    if(req.query.username === 'abc' && req.query.password === 'abc'){
        next()
    }else{
        res.send("<h1><Login failed</h1>")
    }
}
app.get("/login",auth,loginResponse);

app.listen(port,()=>{
    console.log(`listening on the port ${port}`);
})