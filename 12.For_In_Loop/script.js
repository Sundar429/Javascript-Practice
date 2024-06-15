//for in loop

// let details={
//     fname:"Sundar",
//     age:23,
//     address:"Madurai"
// }

// for(let detail in details){
//     console.log(detail+" : "+details[detail]);
// }

//object to an array

// let details={
//     fname:"Sundar",
//     age:23,
//     address:"Madurai"
// }

// let arr_keys=Object.keys(details);
// console.log(arr_keys);
// let arr_values=Object.values(details);
// console.log(arr_values);

// for(let i=0;i<arr_keys.length;i++){
//     console.log(arr_keys[i]+ " : "+ arr_values[i]);
// }

//break statement
// console.log("------Break-------");
// for(let i=0;i<=10;i++){
//     console.log(i);
//     if(i==4){
//         break;
//     }
// }

//Continue statement
console.log("------Continue-------");
for(let i=0;i<=10;i++){
   
    if(i%2==0){
        continue;
    }
    console.log(i);
}