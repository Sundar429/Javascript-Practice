//String methods

//concatenation

let first = "Meenakshi";
let second = "Sundaram";

console.log("concatenation : " + first + " " + second);

//concat

let twoJoins = first.concat(" ", second);
console.log("concat : ", twoJoins);

//append

let a = "Meenakshi";

a += " Sundaram";
console.log("Append : ", a);

//Escaping

let b = 'It cant\'t be run'
console.log(b);

//length

let c = first.length;
console.log("Length : ", c);

//uppercase

let up = first.toUpperCase();
console.log("UpperCase : ", up);

//lowercase

let lo = first.toLowerCase();
console.log("LowerCase : ", lo);

//indexOf

let io = first.indexOf('e');
console.log("IndexOF e: ", io);


//lastindexOf

let lio = first.lastIndexOf('e');
console.log("lastIndexOf e: ", lio);


//charAt

let ca = first.charAt(3);
console.log("charAt 3: ", ca);


//charCodeAt

let cca = first.charCodeAt(4);
console.log("charCodeAt 4: ", cca);

//substr
let s = first.substr(0, 2);
console.log("substr : ", s);

//substr
let ss = first.substring(2);
console.log("substring : ", ss);

let ss2 = first.substring(2, 0);
console.log("substring : ", ss2);

let ss3 = first.substring(22, 30);
console.log("substring Invalid Length: ", ss3);


let ss4 = first.substring(-3);
console.log("substring -3 : ", ss4);
//Slice

let sl = first.slice(2, 4);
console.log("Slice : ", sl);

let sl2 = first.slice(22, 30);
console.log("Slice Invalid Length: ", ss3);


let sl3 = first.slice(-3);
console.log("Slice -3 : ", sl3);

//split

let spl = "Hi My Name is Meenakshi";

let spl2 = spl.split(" ");

console.log("Split :" + spl2);
console.table(spl2);

//replace

let rep = "I am from Madurai";
console.log("Before Replace : ", rep);
let rep2 = rep.replace("Madurai", "Chennai");
console.log("After Replace : ", rep2);

//includes

let cars = ["BMW", "Audi", "Jaguar", "BENZ"];

let inc = cars.includes("BMW");

console.log(inc);

//trim

let tm = "  Sundar   ";

console.log("Before trim : ", tm.length);
tm = tm.trim();
console.log("After trim : ", tm.length);

//padStart

let ps = "T";

ps = ps.padStart(3, '$');

console.log(ps);

//padEnd

let ps2 = "S";

ps2 = ps2.padEnd(3, '$');

console.log(ps2);

//long literal string

let longString = "Lorem ipsum dolor sit amet consectetur adipisicing elit.\ Facere minus, deserunt rerum vitae sequi et esse aliquid amet odio.\ Officiis accusamus unde quidem, atque cumque \ dolor quo natus blanditiis consequuntur?"

console.log(longString);


//fromCharCode
console.log(String.fromCharCode(65,66,67,97,98,99));


//Template literal

const details={
    fname:"Meenakshi sundaram",
    age:23,
    address:"Madurai"
}


let tl=`My Name is ${details.fname} and I was ${details.age} Years old. I am from ${details.address}.`;
console.log(tl);
