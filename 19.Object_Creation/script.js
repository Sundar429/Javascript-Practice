//object creation

//1.object literal
// const person={
//     fname:"Sundar",
//     age:23,
//     gender:"Male"
// }

// console.log(person);

//2.Object Constructor
// const person= new Object();

// person.name="sundar";
// person.age=23;
// person.gender="Male";

// console.log(person);

//3.Object.create

// const personPro={
//     sayHello:function(){
//         console.log(`Hello my name is ${this.name}`);
//     }
// }

// const person=Object.create(personPro);
// person.name="Sundar";
// person.age=23;
// person.gender="Male";
// console.log(person);
// person.sayHello();


//4.Class
// class person{
//     constructor(name,age,gender){
//         this.name=name;
//         this.age=age;
//         this.gender=gender;


//     }
// }

// let person1= new person("Sundar",23,"Male");

// console.log(person1);