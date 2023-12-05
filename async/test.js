console.log("First message");
setTimeout(()=>{
    console.log("Second message");
},1000)
console.log("Third message");

function a(){
    console.log("a called");
    // throw new Error("an error");
}
function b(){
    a();
}
function c(){
    b();
}
c();

// function d(){
//     d();
// }

// d();


function aFunc(message){
    console.log("Do something");
    message();
}

function callback(){
    console.log("callback func");
}
aFunc(callback);

// callback hell
function callbackHell(){
    setTimeout(()=>{
        const data = {user:"admin"}
        console.log(data);
        setTimeout(()=>{
            data.role = "administrator";
            console.log(data);
            setTimeout(()=>{
                console.log("do something");
            },500)
        },1000)   
    },500)
}
callbackHell();