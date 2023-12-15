const express = require('express')
// const session = require('express-session');
const mongoose = require('mongoose');
// const mongodbStore = require('connect-mongodb-session')(session);
const bcrypt  = require('bcryptjs');
const cookieparser = require('cookie-parser');
const cookieParser = require('cookie-parser');

const databaseUri = "mongodb://127.0.0.1:27017/mydb";

async function db(){
    await mongoose.connect(databaseUri)
}

db()
 .then(res=>{
    console.log("DB connected");
 })
 .catch(err=>{
    console.log(`error ${err}`);
 })

const PORT = 3000;
const application = express();
// const store = new mongodbStore({
//     uri:databaseUri,
//     collection:"sessions"
// });
// //middleware
// application.use(session(
//     {
//         secret:"thisisasecrettosigncookie",
//         resave:false,
//         saveUninitialized:false,
//         cookie:{
//             secure:false,
//             maxAge:60000
//         },
//         store:store
//     }
// ));
//middleware

application.use(cookieParser());
application.use(express.urlencoded({extended:true}));

application.set('view engine','ejs');

//routing
application.get("/",(req,res)=>{
    // req.session.isAuth = true;
    // console.log(req.session);
    // console.log(req.session.id);
    res.render("home")
});
application.get("/login",(req,res)=>{
    res.render('login');
})
application.get("/register",(req,res)=>{
    res.render('register');
})
//start server
application.listen(PORT,()=>{
    console.log(`Listening on ${PORT}`);
})