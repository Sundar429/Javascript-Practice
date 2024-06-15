//If statement

// let age=prompt("Enter your age :");

// if(age!=null&&age>=18){
//     console.log("Eligible For Vote");
// }


//If Else statement

// let age=prompt("Enter your age :");

// if(age!=null&&age>=18){
//     console.log("You are Eligible For Vote");
// }
// else{
//     console.log("You are not Eligible For Vote");
// }

//Else IF Statement

// let num=10;

// if(num<0){
//     console.log(num +" is a negative number");
// }
// else if(num>0){
//     console.log(num +" is a positive number");
// }
// else{
//     console.log("Given number is Zero");
// }

// let avg=prompt("Enter the Mark : ")

// if(avg>=90 && avg<=100){
//     console.log("A Grade");
// }

// else if(avg>=80 && avg<=89){
//     console.log("B Grade");
// }
// else if(avg>=70 && avg<=79){
//     console.log("C Grade");
// }
// else {
//     console.log("D Grade");
// }


//Nested IF Statement

let english=90,maths=95,science=92;
let total,avg;

total=english+maths+science;
avg=total/3;

console.log("Total :"+total);

console.log("Average :"+avg);

if(english>=35 && maths>=35 && science>=35){
    console.log("Result : Pass");
    if(avg>=90 && avg<=100){
        console.log("Grade : A");
    }
    else if(avg>=80 && avg<=89){
        console.log("Grade : B");
    }
    else if(avg>=70 && avg<=79){
        console.log("Grade : C");
    }
    else{
        console.log("Grade : D");
    }
}
else{
    console.log("Result : Fail");
}

//Switch Statement

let number=2;

// switch (number) {
//     case 1:
//         console.log("One");
//         break;
//     case 2:
//         console.log("Two");
//         break;
//     case 3:
//         console.log("Three");
//         break;

//     default:
//         console.log("Invalid Input");
//         break;
// }


//Combine Switch Statement


// let letter='a';

// switch (letter) {
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//     case 'A':
//     case 'E':
//     case 'I':
//     case 'O':
//     case 'U':
//         console.log(letter+" is a vowel");
//         break;

//     default:
//         console.log(letter+" is not a vowel");
//         break;
// }