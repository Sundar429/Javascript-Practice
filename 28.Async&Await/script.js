// async function myFunction(){
//     return "Hello world"
// }

// console.log(myFunction());

// myFunction().then((msg)=>{
//     console.log(msg);

// })
// .catch((err)=>{
//     console.error(err);

// })

// async function getData(){
//     let getPost= new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Blog Post")
//         },2000)
//     })
//     let getComment= new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Blog Comments")
//         },5000)
//     })

//     console.log("Fetching Post....");
//     let post= await getPost;
//     console.log("Post :",post);
    
//     console.log("Fetching Comments....");
//     let comments= await getComment;
//     console.log("Comments :",comments);
//     return[post,comments]
// }

// console.log("Welcome Blog Post");

// let data=getData();

// console.log(data);

// data.then((value)=>{
//     console.log(value);
// })
// .catch((err)=>{
//    console.error(err)
// })


let result =function(marks){
    return new Promise(function(resolve,reject){
        console.log("Calculating Result....");
        setTimeout(()=>{
            let total=0;
            let result="Pass";

            marks.forEach((mark)=>{
                total+=mark;
                if(mark<35){
                    result="Fail"
                }
            })
          resolve({total:total,result:result})
        },2000)
    })

}

let grade=function(response){

    return new Promise(function(resolve,reject){
        if(response.result=="Pass"){
            let avg=response.total/3;
            let gradeText="Grade D"

            if(avg>=90 && avg<=100){
                gradeText="Grade A"
            }

            else if(avg>=80 && avg<=89){
                gradeText="Grade A"
            }

            else if(avg>=70 && avg<=79){
                gradeText="Grade A"
            }
            resolve(gradeText)
        }
        else{
            reject("No Grade")
        }
    })

}

// result([80,70,20]).then((value)=>{
//     console.log("Total: ",value.total);
//     console.log("Result: ",value.result);
//     return grade(value)
// }).then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.error(err)
// })


async function getResults(){
    try{
        const value= await result([80,70,80]);
        console.log("Total: ",value.total);
        console.log("Result: ",value.result);
        const gradeText= await grade(value);
        console.log(gradeText);
    }
    catch(err){
        console.error(err);

    }
}
getResults()