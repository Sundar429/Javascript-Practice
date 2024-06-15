//Type conversion


//String conversion

// var a;

//number to string
// a=10;

// console.log(a,typeof a);

// a=String(a);

// console.log(a,typeof a);



// //number to string
// a=10.25;

// console.log(a,typeof a);

// a=String(a);

// console.log(a,typeof a);


// //boolean to string
// a=true;

// console.log(a,typeof a);

// a=String(a);

// console.log(a,typeof a);


// //Date to string
// a= new Date();

// console.log(a,typeof a);

// a=String(a);

// console.log(a,typeof a);


// //array to string
// a=[1,2,3,4,5];

// console.log(a,typeof a);

// a=String(a);

// console.log(a,typeof a);



//number conversion


//NumberString to Number
// let a;

// a="10"

// console.log(a,typeof a);

// a=Number(a);

// console.log(a,typeof a);

// //Boolean to Number
// a=false

// console.log(a,typeof a);

// a=Number(a);

// console.log(a,typeof a);

// //Array to Number(NaN)

// a=[1,2,3,4,5];

// console.log(a,typeof a);

// a=Number(a);

// console.log(a,typeof a);

// //String to Number(NaN)
// a="sundar";

// console.log(a,typeof a);

// a=Number(a);

// console.log(a,typeof a);

// //Using parseInt
// a="10"

// console.log(a,typeof a);

// a=parseInt(a);

// console.log(a,typeof a);


// //Using parseFloat
// a="10.25"

// console.log(a,typeof a);

// a=parseFloat(a);

// console.log(a,typeof a);


//Type Coercion

let a="25";
let b=10;

let c=a+b;

console.log(c);
console.log(typeof c);

a=Number(a);

let d=a+b;
console.log(d);
console.log(typeof d);
