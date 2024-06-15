/*Js Data types

i)primitive data type

-string
-number
-boolean
-null
-undefined

ii)reference data type

-array
-objects
*/

var fname="sundar"
console.log(typeof fname);

var a=10;
console.log(typeof a);

var isActive=true;
console.log(typeof isActive);

var student=null;
console.log(typeof student);

var b;
console.log(typeof b);

var s1=Symbol();
console.log(s1);
var s2=Symbol();
console.log(s2);
console.log(s1==s2);


//reference type


var course=['c','c++','java']
console.log(typeof course);

var books={
    book1:"Social book",
    book2:"Science book",
    book3:"English book",
    book4:"Maths book",
}

console.log(typeof books);

var d=new Date();
console.log(d);
console.log(typeof d);