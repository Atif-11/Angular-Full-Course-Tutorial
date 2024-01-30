"use strict";
let lname;
lname = "Ali";
let newname = lname.toUpperCase();
console.log(newname);
let age;
age = 20;
age = 21.5;
let dob = "06";
let result = parseInt(dob);
let isInvalid = false;
console.log(isInvalid);
let empList;
empList = ["Atif", "Atif_1", "Atif_2"];
let emp = empList.find((emp) => emp === "Atif");
let numList;
numList = [1, 2, 3, 4, 5];
let newNum = numList[0];
let results = numList.filter((num) => num > 2);
let sum = numList.reduce((acc, num) => acc + num);
console.log(results);
console.log(emp);
console.log(sum);
let c = 2 /* Color.Blue */;
let swapNumbs;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNumbs = swapNumbers(10, 20);
swapNumbs[0];
swapNumbs[1];
// Do not use any in your codebase
let department;
department = "IT";
department = 10;
