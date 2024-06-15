//rest parameter

function myFunction(first,second,...rest){
    console.log(first);
    console.log(second);
    console.log(rest);
}

myFunction(10,30,50,60,70);

//spread operator

let arr=[1,3,5];
let newArray=[...arr,7,9,6]
console.log(newArray);