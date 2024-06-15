let num=371,result=0;
let temp=num;

while(temp!=0){
    let rem=temp%10;
    result+=rem*rem*rem;
    temp=parseInt(temp/10);
}

if(result==num){
    console.log(num+" is a armstrong number");
}
else{
    console.log(num+" is not  a armstrong number");
}