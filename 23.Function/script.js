//Function

// function add(a,b){
//     return a+b
// }

// console.log(add(20,30));
// console.log(add(40,80));

//Function aribitrary arguments

//Using local variable

// function sum(){

//     let total=0;

//     for(let i=0;i<arguments.length;i++){

//         total+=arguments[i];
//     }
//     return total
// }

// console.log(sum(34,66));

// console.log(sum(54,88,77));

//using spread operator

// function sum(...args){

//     let total=0;

//     for(let i=0;i<args.length;i++){

//         total+=args[i];
//     }
//     return total
// }

// console.log(sum(34,66));

// console.log(sum(54,88,77,90));


//Function expression

// const addition=function(a,b){
//     return a+b;

// }

// console.log(addition(111,777));


//Arrow Function

// const add=(a,b)=>{
//     return a+b;

// }

// console.log(add(44,666));

//1.Using Arrow Function with map

// let numbers=[1,2,3,4,5,6];
// console.log(numbers);

// let doubleNumbers=numbers.map(number =>number*2)
// console.log(doubleNumbers);

//2.Using Arrow Function with filter

// let letters=["apple","banana","mango","pineapple"];

// console.log(letters);
// let filterLetters=letters.filter(letter=>letter.length>5);
// console.log(filterLetters);

//3.Using Arrow Function with reduce
// let numbers=[1,2,3,4,5,6];
// console.log(numbers);
// let total=numbers.reduce((sum,number)=>sum+number);
// console.log(total);

//4.Using Arrow Function with closure


// let createCounter=()=>{
//     let count=0;
//     return ()=>{
//         count++;
//         return count
//     }
// }

// let counter=createCounter();

// console.log(counter());
// console.log(counter());
// console.log(counter());