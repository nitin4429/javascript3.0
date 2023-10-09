const student = {
    name:"john",
    age:32,
    grade:"B"
}
console.log(student);
function Ugrade(studentGrade){
    student.grade=studentGrade;
}
Ugrade("C");
console.log(student);