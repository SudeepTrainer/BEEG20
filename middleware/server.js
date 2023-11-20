const express = require('express');
const app = express();
const port = 3000;

//default page
app.get("/",defaultResponse);
const defaultResponse = function (requestObject,responseObject,nextMiddleware){
    console.log("default page route action called");
    responseObject.send("<h1>Default page</h1>")
}
//login page
app.get("/login",loginResponse);
const loginResponse = function(requestObject,responseObject,nextMiddleware){
    console.log("login page route action called");
    responseObject.send("<h1>Login page</h1>")
}