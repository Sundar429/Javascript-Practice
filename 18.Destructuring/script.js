//Destructuring

//Array Destructuring
// let arr=[20,40,60,80,100];

// let[a,b,...c]=arr;
// console.log(a);
// console.log(b);
// console.log(c);

// let nestedArray=[[1,2],[3,4],[5,6]];

// let[[a,b],[c,d],[e,f]]=nestedArray;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);

//Object Destructuring

// let student={fname:"Sundar",age:23,gender:"Male"}

// let{fname,age,gender}=student;

// console.log(fname);
// console.log(age);
// console.log(gender);

// let address={
//     street:"Kalaivanar 1st Street",
//     city:"Madurai",
//     state:"Tamil Nadu",
//     zip:625018
// }


// let employee={
//     fname:"Sundar",
//     age:23,
//     gender:"Male",
//     address
// }
// console.log(employee);

// let {fname,age,gender,address:{street,city,state,zip}}=employee;

// console.log(fname);
// console.log(age);
// console.log(gender);
// console.log(street);
// console.log(city);
// console.log(state);
// console.log(zip);


//Function parameter Destructuring using object

// function myAdd({name}){
// console.log(`Hello ,${name}!`);
// }
// const person={name:"Sundar"};

// myAdd(person);



// function sayHello({name,age,...rest}){
//     console.log(`Hello ${name},Your age is ${age}!`);
//     console.log(rest);
//     }
//     const person2={name:"Sundar",age:23,city:"Madurai",state:"Tamil nadu"};
    
//     sayHello(person2);
    

//Function parameter Destructuring using array

// function myArray([a,b,c]){

//     return a+b+c;
// }

// const arr=[1,2,3];
// console.log(myArray(arr));



