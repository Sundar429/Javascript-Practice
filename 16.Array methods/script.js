//Array Methods


//forEach

// let arr=[10,40,70,90,110,150];

// arr.forEach((value)=>{
//    console.log(value);
// })
// arr.forEach((value,index,arr)=>{
//    console.log("Index :"+index+" "+"Value :"+value+" "+"Array:"+arr);
// })


// let obj=[{fname:"Sundar",age:23,address:"Madurai",salary:60000},
// {fname:"Akash",age:26,address:"Coimbatore",salary:70000},
// {fname:"Arav",age:29,address:"Salem",salary:80000},
// {fname:"Bala",age:23,address:"Sivakasi",salary:60000},
// {fname:"Kathir",age:25,address:"Dindugul",salary:50000},
// {fname:"Santhosh",age:27,address:"Chennai",salary:40000},
// ]

// obj.forEach((value,index)=>{
//     //  console.log(value.fname);

//     console.log(`My Name is ${value.fname} and I am ${value.age} Year old.I belongs to ${value.address}.My salary is Rs.${value.salary}`);


// })


//map

// let arrNum=[10,20,30,40,50,60,70,80,90,100,81,64];

// let sq=arrNum.map((value)=>{
//     return Math.sqrt(value).toFixed(2)

// });
// console.log(sq);
// console.table(sq);

// let obj=[{fname:"Sundar",age:23,address:"Madurai",salary:60000},
// {fname:"Akash",age:16,address:"Coimbatore",salary:70000},
// {fname:"Arav",age:29,address:"Salem",salary:80000},
// {fname:"Bala",age:13,address:"Sivakasi",salary:60000},
// {fname:"Kathir",age:25,address:"Dindugul",salary:50000},
// {fname:"Santhosh",age:27,address:"Chennai",salary:40000},
// ]


// let check=obj.map((value)=>({
//     ...value,Status:value.age>=18?"Eligible":"Not Eligible"

// }))
// console.log(check);
// console.table(check);

//slice

let arr=[10,20,30,40,50,60,70];


console.log(arr);

console.log(arr.slice(2));


console.log(arr.slice(2,4));


//splice

// let a1=[10,20,30,40,50,60,70,80,90,100];

// console.log("Before slicing : "+a1);
// console.log("Removed Items : "+a1.splice(2));
// console.log("After slicing : "+a1);

// let a2=[10,20,30,40,50,60,70,80,90,100];

// console.log("Before slicing : "+a2);
// console.log("Removed Items : "+a2.splice(2,3));
// console.log("After slicing : "+a2);


// let a3=[10,20,30,40,50,60,70,80,90,100];

// console.log("Before slicing : "+a3);
// console.log("Removed Items : "+a3.splice(2,3,[45,55,85]));
// console.log("After slicing : ",a3);


// let a4=[10,20,30,40,50,60,70,80,90,100];

// console.log("Before slicing : "+a4);
// console.log("Removed Items : "+a4.splice(2,0,35,75));
// console.log("After slicing : "+a4);


//concat

// const c1=[10,20,30,40];
// const c2=[50,60,70,80];
// const c3=[90,100];

// let c4=c1.concat(c2,c3);
// console.log(c4);

// c4=c1.concat(c2,c3,42,46,52,56);
// console.log(c4);

// c4=c1.concat(c2,c3,42,46,52,56,['S','U','N','D','A','R']);
// console.log(c4);
// console.table(c4);

//Sort

// const names=["Sundar","Akash","Bala","Vinoth","Surya","Dinesh"];
// console.log("Before Sorting : "+names);
// names.sort();
// console.log("After Sorting : "+names);

// const num =[80,60,100,59,37,112];
// console.log("Before Sorting : "+num);
// num.sort();
// console.log("After Sorting : "+num);

// num.sort((a,b)=>{
//     return a-b;


// });

// console.log("Asc Compare Sort : "+num);

// num.sort((a,b)=>{
//     return b-a;


// });

// console.log("Desc Compare Sort : "+num);



// let obj=[{fname:"Sundar",age:23,address:"Madurai",salary:60000},
// {fname:"Akash",age:16,address:"Coimbatore",salary:70000},
// {fname:"Arav",age:29,address:"Salem",salary:80000},
// {fname:"Bala",age:13,address:"Sivakasi",salary:60000},
// {fname:"Kathir",age:25,address:"Dindugul",salary:50000},
// {fname:"Santhosh",age:27,address:"Chennai",salary:40000},
// ];

// console.table(obj);

// obj.sort((a,b)=>{
//     return a.age - b.age;
// });


// console.table(obj);


//fill

// let number=[1,2,3,4,5,6,7,8,9,10];

// console.log("Before fill : "+number);
// // number.fill(40);
// //number.fill(40,3);
// number.fill(40,3,5);
// console.log("After fill : "+number);

//includes

// let cars=["BMW","Audi","Jaguar","Benz","Rolls Royce"];

// let result=cars.includes("BMW");

// console.log(result);

// result=cars.includes("swift");

// console.log(result);

//  result=cars.includes("BMW",1);

// console.log(result);

//join

// let cars=["BMW","Audi","Jaguar","Benz","Rolls Royce"];

// console.log("Before joining : ",cars);

// console.log("After joining : ",cars.join());

// console.log("After joining : ",cars.join('|'));

//reverse

// let n1=[1,2,3,4,5,6];
// console.log("Before Reverse : ",n1);
// n1.reverse();
// console.log("After Reverse : ",n1);

// let ob1={0:40,1:30,2:10,length:3}
// console.log("Before Reverse : ",ob1);
// Array.prototype.reverse.call(ob1);
// console.log("After Reverse : ",ob1);

//push
// let np=[1,2,3,4,5,6];

// np.push(60);
// console.log("After push : ",np);

// let sp=["Apple"];
// console.log("Before push : ",sp);
// sp.push("Mango","Banana")
// console.log("After push : ",sp);

//Merge two array

// let arr1=["Sundar","Dhoni","Vijay"];

// let arr2=["Jadeja","Dhanush","Akash"]

// arr1.push(...arr2);

// console.log(arr1);


//pop

// let users=["Ajay","Balu","Hari","David"];
// console.log("Before pop : ",users);

// console.log(users.pop());
// console.log("After pop : ",users);

//shift

// let cars=["BMW","Audi","Jaguar","Benz","Rolls Royce"];
// console.log("Before shift : "+cars);
// let re=cars.shift();
// console.log("After shift : "+cars);
// console.log("Removed Element :"+re);


//unshift
// let us =["Sundar","Akash","Bala","Vinoth","Surya","Dinesh"];
// console.log("Before unshift : "+us);
// let len=us.unshift("Siva");
// console.log("length :"+len);
// console.log("After unshift : "+us);

//indexof

// let iof=["Sundar","Akash","Bala","Vinoth","Surya","Dinesh"];
// console.log(iof);
// let i=iof.indexOf("Akash");
// console.log("Index :",i);

// let siof="Meenakshi sundaram";
// console.log(siof);
// // i=siof.indexOf("a");
// i=siof.indexOf("a",5);
// console.log("Index :",i);


//lastIndexOf

// let lof=["Sundar","Akash","Bala","Vinoth","Surya","Dinesh","Akash"];
// console.log(lof);
// let i=lof.lastIndexOf("Akash");
// console.log("Index :",i);

// let slof="Meenakshi sundaram";
// console.log(slof);
// let i=slof.lastIndexOf("a");

// console.log("Index :",i);

//Every method

// let num=[4,3,8,2,10];

// let result=num.every((values)=>{
//     return values%2==0;

// });
// console.log("All numbers are even :" ,result);


//some method

// let result2=num.some((values)=>{
//     return values%2==0;

// });
// console.log("Some numbers are even :" ,result2);



//every & some with object
// const users =[{fname:"Sundar",age:23},
// {fname:"Akash",age:19},
// {fname:"Arav",age:29},
// {fname:"Bala",age:12},
// {fname:"Kathir",age:25},
// {fname:"Santhosh",age:27},
// ];

// let result3=users.every((values)=>{
//     return values.age>=18;

// })
// console.log("All are Elligible:",result3);


//  result3=users.some((values)=>{
//     return values.age>=18;

// })
// console.log("Some are Elligible:",result3);