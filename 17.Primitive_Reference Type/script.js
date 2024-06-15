//Primitive Type

// let a=10;
// console.log(typeof a);

// let b="sundar";
// console.log(typeof b);

// let c=true;
// console.log(typeof c);
 
// let d;
// console.log(typeof d);


// let n1=20;
// let n2=n1;

// console.log("n1 :",n1);
// console.log("n2 :",n2);
// n1=45;
// console.log("n1 :",n1);
// console.log("n2 :",n2);

//Reference Type
// let obj1={fname:"Sundar",age:23};
// let obj2=obj1;

// console.log("Obj1 :",obj1);
// console.log("Obj2 :",obj2);
// obj1.age=24;
// console.log("Obj1 :",obj1);
// console.log("Obj2 :",obj2);


// let arr1=[1,2,3];
// let arr2=arr1;
// console.log("arr1 : ",arr1);
// console.log("arr2 : ",arr2);
// arr1.push(5);
// console.log("arr1 : ",arr1);
// console.log("arr2 : ",arr2);


//object cloning
const obj3={a:2,b:5,c:1};

const obj4={d:3,e:6,f:4};
// //assign
 const obj5=Object.assign({},obj3,obj4);
 console.log(obj5);

// //spread operator
// const obj5={...obj3,...obj4}
// console.log(obj5);

//array cloning

// let orignialArray=[20,40,60,70];

//spread operator
// let cloneArray=[...orignialArray];

//slice
// let cloneArray=orignialArray.slice();

//concat
// let cloneArray=[].concat(orignialArray);

//Array.from()
// let cloneArray=Array.from(orignialArray);

//JSON.parse().JSON.stringify
// let cloneArray= JSON.parse(JSON.stringify(orignialArray));

// console.log(cloneArray);


//const array

// const a=12;
// console.log(a);
// a=13;
// console.log(a);

// const arr=["Sundar","Vijay"];
// arr.push("ajay");
// console.log(arr);
// arr=["Arya"]
// console.log(arr);


