//Block Scope

// if(true){
//     let blockVariable="Hi I am from Block Variable"
//     console.log(blockVariable);
// }
// // console.log(blockVariable);

//Function scope

function fscope(){

    functionVariable="Hi I am from Function Variable ";
    console.log(functionVariable);

    function nest(){
        console.log(functionVariable);
    }
    nest();
}
fscope();