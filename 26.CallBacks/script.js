function myCallBack(){
    console.log("I am from Callback Function");
}

function highOrderFunction(myCallBack){
    myCallBack();
}
highOrderFunction(myCallBack);


setTimeout(function(){
    console.log("Hello World");
},3000);

setInterval(function(){
    console.log("Hello World Sundar");
},3000)

const numbers=[1,2,3,4];

numbers.forEach(function(number){
    console.log(number);

})