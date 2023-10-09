const student = {
    name:"john",
    age:30,
    slalry:30000
}
function hasProperty(property){
    return Object.hasOwnProperty(property)
}
console.log(Object.hasOwnProperty("class"));