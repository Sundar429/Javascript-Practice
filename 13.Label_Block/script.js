//label block

let groups=[
    ["Akash","Bhuvanan","Ashok"],
    ["Adivik","Ganesh","Karthi"],
    ["Arun","Vijay","Alwin"],
];


for(let group of groups){
    // console.log(group);
    inner:
    for(let member of group){
        if(member.startsWith('A')){
            console.log("Found a word startswith A : ",member);
            break inner;
        }
    }
}