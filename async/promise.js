//callback hell

// function getLocation(){
//     function getLatLong(){
//         function getWeather(){
//             function getWeatherDetails(){

//             }
//         }
//     }
// }

// pending, fulfilled, rejected state
// function getWeather(){
//     return new Promise(function(resolve,reject){
//        setTimeout(()=>{
//         resolve("Winter");
//         // reject("Error in fetching weather data")
//        },500);
//     })
// }

// function getWeatherDetails(weather){
//     return new Promise(function(resolve,reject){
//         switch(weather){
//             case "Summer": resolve("Hot winds"); 
//                 break;
//             case "Winter": resolve("Cold winds");
//                 break;
//             default: reject("Nothing found");
//         }
//     })
// }

// const weather = getWeather();
// console.log(weather);
// function onSuccess(data){
//     console.log(`Success ${data}`);   
// }
// function onError(error){
//     console.log(`Error ${error}`);    
// }

// // getWeather().then(onSuccess,onError);
// getWeather()
//     .then(getWeatherDetails)
//     .then(onSuccess)
//     .catch(onError);

// getWeather().then((data)=>{
//     console.log(`Success ${data}`);   
// },
// (err)=>{
//     console.log(`Error ${err}`);
// }
// )

//https://jsonplaceholder.typicode.com/users/


// fetch("https://jsonplaceholder.typicode.com/users/")
// .then(response=>{
//     return response.json()
// })
// .then(data=>{
//     console.log(data);
// })
// .catch(error=>{
//     console.log(error);
// })
async function getUser(){
    const userResponse = await fetch("https://jsonplaceholder.typicode.com/users/");
    const jsonUserData = await userResponse.json();
    console.log(jsonUserData);
}
getUser();
