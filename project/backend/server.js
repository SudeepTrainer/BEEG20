const express = require('express')
const PORT = 3000;

const application = express();

//middleware

//routing
application.get("/",(req,res)=>{
    res.send("<h1>Home page</h1>")
});
//start server
application.listen(PORT,()=>{
    console.log(`Listening on ${PORT}`);
})