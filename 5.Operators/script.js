//Arthimetic Operator

// let a=100;
// let b=20;
// let c;
//  c=a+b;
//  console.log(c);
//  c=a-b;
//  console.log(c);
//  c=a*b;
//  console.log(c);
//  c=a/b;
//  console.log(c);
//  c=a%b;
//  console.log(c);
//  c=++a;
//  console.log(c);
//  c=--a;
// console.log(c);

//Assignment Operator

// let a=20;

// a+=5;
// console.log(a);
// a-=5;
// console.log(a);
// a*=5;
// console.log(a);
// a/=5;
// console.log(a);
// a%=5;
// console.log(a);

//comparsion operator

// let a=20;
// let b="200";

// console.log(a==b);

// console.log(a===b);
// console.log(a!=b);
// console.log(a!==b);

//relational operator
// let a=20;
// let b=50;

// console.log("Greater :",a>b);
// console.log("Lesser :",a<b);
// console.log("Greater than or equal :",a>=b);
// console.log("Lesser than or equal :",a<=b);


//logical operator(AND,OR,NOT)

// let mark=50;

// console.log(mark>=35 && mark<=100);

// let a=10;

// console.log(a==2 || a==10);

// let b = false;

// console.log(!b);


//strictly equality or identity operator

// let a=10;

// let b='10';

// console.log(a==b);
// console.log(a===b);

//ternary operator

// let age = 17;

// let result=age>=18?"Eligible for vote":"Not Eligible for vote";

// console.log(result);

//Handling null values
// function hello(name){

//     const result2=name?name:"No Name";
//     console.log("Hello :"+result2);

// }
// hello('Sundar');

// const details={fname:"Sundar",age:23};
// console.log(details);
// console.log(details.fname);

// const user=(details)=>{
//    const result3=details.fname?details.fname:"No name";
//     return "Welcome:"+result3;
// }
// console.log(user(details));


//Conditional Chaining
// const avg=70;

// const grade=avg>=90?"A Grade":avg>=80?"B Grade":"C Grade";
// console.log(grade);


//Bitwise Operator


//Bitwise AND (&)
// let a=10;
// let b=30;

// console.log(a&b);


// a&=b;

// console.log(a);

//Bitwise OR (|)
// console.log(a|b);

// a|=b;

// console.log(a);

//Bitwise NOT (~)

//Formula- ~a = -a -1
// a=50;

// console.log(~a);

//Bitwise XOR (^)

// let c=12;
// let d=6;

// console.log(c^d);

//Left shift  (<<)

// let l1=2;
// let l2=5;

// console.log(l1<<l2);

// l1<<=l2;
// console.log(l1);

//Right shift (>>)

// let r1=8;
// let r2=2;

// console.log(r1>>r2);

// r1>>=r2;
// console.log(r1);

//Nullish coaelicing operator

// let a=null??"No value";

// console.log(a);


// let b=null??56;
// console.log(b);

//Nullish assignment operator(??=)

// const obj={fname:'sundar'};

// console.log(obj);
// console.log(obj.fname);

// console.log(obj.age);

// obj.age??=23;

// console.log(obj);


// Increment(++) & Decrement(--)

// let a=10;
// a++
// console.log(a);
// let b=10;
// b--
// console.log(b);

//Pre Increment & Decrement

// let x=12;

// const y=++x;

// console.log("X :",x,"Y :",y);


// let c=12;

// const d=--c;

// console.log("C :",c,"D :",d);
//Post Increment & Decrement

// let e=12;

// const f=e++;

// console.log("E :",e,"F :",f);


// let g=12;

// const h=g--;

// console.log("G:",g,"H :",h);