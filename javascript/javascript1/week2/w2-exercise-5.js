let class07Students = [];

function addStudentToclass(studentName) {
  if (studentName == "Queen" && class07Students.includes("Queen") == false) {
    class07Students.unshift("Queen");
  } else if (class07Students.includes(studentName, 0)) {
    return studentName + " is already registered.";
  } else if (class07Students.length >= 6) {
    return "Cannot add more students to class 07";
  } else {
    class07Students.push(studentName);
  }
  return class07Students;
}

console.log(addStudentToclass("one"));
console.log(addStudentToclass("one"));
console.log(addStudentToclass("two"));
console.log(addStudentToclass("three"));
console.log(addStudentToclass("Four"));
console.log(addStudentToclass("Five"));
console.log(addStudentToclass("Five"));
console.log(addStudentToclass("Six"));
console.log(addStudentToclass("Queen"));
console.log(addStudentToclass("Queen"));

var getNumberOfStudent = class07Students.length;
console.log(class07Students);
console.log(getNumberOfStudent);
