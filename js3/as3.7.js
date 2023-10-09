
const usermap=new Map();
function adduser(name,age,email){
    const userinfo ={age,email}
    usermap.set(name,userinfo)
}
adduser('john', 20, 'abc@gmail.com')
adduser('peter', 40, 'abc@gmail.com')
console.log(usermap);

function updateuser(name,age,email){
    if(usermap.has(name)){
       const userinfo = usermap.get(name)
       userinfo.age = age ;
       userinfo.email = email ;
    }
}
updateuser('peter', 30, 'abc@gmail.com')
console.log(usermap);

function deleteuser(name){
    usermap.delete(name)
}
deleteuser('john');
console.log(usermap);