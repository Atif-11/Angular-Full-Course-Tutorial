"use strict";
// num3 is optional
function add(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add(2, 4));
// All parameters are required So an example
// of required parameters
const sub = (num1, num2) => num1 - num2;
console.log(sub(4, 2));
const mult = function (num1, num2) {
    return num1 * num2;
};
// Example of rest parameters
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let numbers = [1, 2, 3, 4, 5];
// Some different ways to implement rest parameters
console.log(add2(2, 3, ...numbers));
console.log(add2(2, 3, ...[5, 6, 7]));
console.log(add2(2, 3, 4, 5, 6, 7, 7, 8, 9));
function getItems(items) {
    return new Array().concat(items);
}
let concatNumber = getItems([1, 2, 3, 4, 5]);
let concatString = getItems(["a", "b", "c", "d", "e"]);
