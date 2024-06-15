// var n=19;

// for(let limit=2;limit<=n;limit++){
//     var flag=false;

//     for(let i=2;i<=limit;i++){
//         if (limit%i==0 && i!=limit) {
//             flag=true;
//             break;
            
//         }
//     }

//     if(!flag){
//         console.log(limit,"is a prime number");

//     }
//     else{
//     console.log(limit,"is not a prime");
//     }
// }


var n=19;

var flag=false;

    for(let i=2;i<=n/2;i++){
        if (n%i==0 ) {
            flag=true;
            break;
            
        }
    }

    if(!flag){
        console.log(n,"is a prime number");

    }
    else{
    console.log(n,"is not a prime");
    }
