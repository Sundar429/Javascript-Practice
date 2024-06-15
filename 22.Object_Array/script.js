//Object Inside Array
const users=[
    {name:"sundar",age:23,gender:"Male"},
    {name:"ashok",age:33,gender:"Male"},
    {name:"kali",age:43,gender:"Male"}
]

console.log(users);

for(const user of users){
    console.log(user);
}

const oldUsers=users.filter(user=>{
   return user.age>30;
})

console.log(oldUsers);