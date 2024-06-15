/* 
variable declaration
i)var-global scope
ii)let-function scope
iii)const-It can't be reintialized

*/

// var a=2;
// var b=6;
// var c=a+b;
// console.log(c);

//var(global scope)

if(true){
    var msg="My name is sundar"
    console.log(msg);
}

// console.log(msg);

//let(function scope)

// if(true){
//     let msg="My name is sundar"
//     console.log(msg);
// }

// console.log(msg);

//const(function scope)

// if(true){
//     const msg="My name is sundar"
//     console.log(msg);
// }

// console.log(msg);


//variable redeclration

//i)var-It can be redeclare

// var a=45;

// console.log(a);

// var a=50;

// console.log(a);



//i)var-It can be reassigned

// var a=45;
// console.log(a);
// a=50;
// console.log(a);



//ii)let-It can't be redeclare
// let a=45;

// console.log(a);

// let a=50;

// console.log(a);

//ii)let-It can be reassigned

// let a=45;
// console.log(a);
// a=50;
// console.log(a);

//iii)const-It can't be redeclare
// const a=45;

// console.log(a);

// const a=50;

// console.log(a);

//iii)const-It can't be reassigned

// const a=45;
// console.log(a);
// a=50;
// console.log(a);


//objects can be reassigned in const


// const student={fname:'sundar',age:23}

// console.log(student);
// console.log(student.fname);
// student.fname="meenakshi";
// console.log(student);