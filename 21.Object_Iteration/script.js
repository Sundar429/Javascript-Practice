//Iterating Object

let user={
    name:"Sundar",
    age:23,
    gender:"Male"
}

console.log(user);

for(let key in user){
    console.log(`${key} : ${user[key]}`);
};


//Object.keys
const keys=Object.keys(user);

keys.forEach(key=>{
    console.log(`${key} : ${user[key]}`);
})

//Object.values

const values=Object.values(user);
values.forEach((value)=>{
    console.log(`${value}`);

})

//Object.entries

const entries=Object.entries(user);
console.log(entries);


//forEach
entries.forEach((entry)=>{
    console.log(`${entry[0]} :${entry[1]}`);

})


//for loop
for(let i=0;i<entries.length;i++){
    console.log(`${entries[i][0]} : ${entries[i][1]}`);
}
console.table(entries)