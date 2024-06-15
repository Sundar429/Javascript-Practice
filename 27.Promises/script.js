// //Promise creation
// const promise=new Promise((resolve,reject)=>{

//     let sum=2+4;

//     if(sum==6){
//         resolve("success")
//     }
//     else{
//         reject("error")
//     }

// });

// promise.then(msg=>{
//     console.log(msg);
// }).catch(error=>{
//     console.error(error);
// })


// setTimeout(() => {
//     console.log("Normal :1");
//     setTimeout(() => {
//         console.log("Normal :2");
//         setTimeout(() => {
//             console.log("Normal :3");
//         }, 250);
//     }, 250);
// }, 250);


//Promise using in setTimeout

// function setTimeoutPromise(duration){
//     return new Promise((resolve,reject)=>{
//         setTimeout(resolve,duration)

//     })
// }

// setTimeoutPromise(250)
// .then(()=>{
//     console.log("Cool Promise : 1");
//     return setTimeoutPromise(250)

// })
// .then(()=>{
//     console.log("Cool Promise : 2");
//     return setTimeoutPromise(250)

// })
// .then(()=>{
//     console.log("Cool Promise : 3");
//     return setTimeoutPromise(250)

// })



//Promise using in addEventListener

// const button=document.querySelector("button");

// function addEventPromise(element,method){
//     return new Promise((resolve,reject)=>{
//      element.addEventListener(method,resolve)
//     })

// }
// addEventPromise(button,"click").then((e)=>{
//     console.log("Clicked");
//     console.log(e);
// })


//Promise.all

//Promise.all Resolve
// Promise.all([Promise.resolve("Good"),Promise.resolve("Good"),Promise.resolve("Good")])
// .then((msg)=>{
//     console.log(msg);
// })
// .catch((error)=>{
//     console.error(error);
// })


//Promise.all Reject
// Promise.all([Promise.resolve("Good"),Promise.reject("error"),Promise.resolve("Good")])
// .then((msg)=>{
//     console.log(msg);
// })
// .catch((error)=>{
//     console.error(error);
// })


//Promise.any
// Promise.any([Promise.resolve("Good 1"),Promise.reject("error"),Promise.resolve("Good 3")])
// .then((msg)=>{
//     console.log(msg);
// })
// .catch((error)=>{
//     console.error(error);
// })


//Promise.race
// Promise.race([Promise.resolve("Good 4"),Promise.reject("error"),Promise.resolve("Good 6")])
// .then((msg)=>{
//     console.log(msg);
// })
// .catch((error)=>{
//     console.error(error);
// })

//Promise.allSettled
// Promise.allSettled([Promise.resolve("Good 7"),Promise.reject("error"),Promise.resolve("Good 9")])
// .then((msg)=>{
//     console.log(msg);
// })
// .catch((error)=>{
//     console.error(error);
// })



//Finally

// const promise=Promise.resolve("Done");

// promise.then((msg)=>{
//     console.log(msg);
// })
// .catch((error)=>{
//    console.error(error);
// })
// .finally(()=>{
//     console.log("All Completed");
// })



// const getPost=()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const posts=["Post1,Post2,Post3"];
//             resolve(posts)

//         },1000)

//     })
// }

// const getComments=()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const comments=["Comments1,Comments2,Comments3"];
//             resolve(comments)

//         },2000)

//     })
// }

// Promise.all([getPost(),getComments()])
// .then((results)=>{
//     const[posts,comments]=results
//     console.log(results);
//     console.log(`Posts : ${posts}`);
//     console.log(`Comments : ${comments}`);

// })
// .catch((err)=>{
//     console.error(err)
// })


//Normal API Calling

fetch(url)
.then((res)=>{
 
    console.log(res.json());
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})