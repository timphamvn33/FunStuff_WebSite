"use strict";
var addButton = document.getElementById("add-btn");
var subtractButton = document.getElementById("subtract-btn");
var multiplyButton = document.getElementById("multiply-btn");
var divideButton = document.getElementById("divide-btn");
var result = document.getElementById("result");
function getNumbers() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    return [num1, num2];
}
// Addition
addButton.addEventListener("click", function () {
    var _a = getNumbers(), num1 = _a[0], num2 = _a[1];
    result.innerText = "Result: ".concat(num1 + num2);
});
// Subtraction
subtractButton.addEventListener("click", function () {
    var _a = getNumbers(), num1 = _a[0], num2 = _a[1];
    result.innerText = "Result: ".concat(num1 - num2);
});
// Multiplication
multiplyButton.addEventListener("click", function () {
    var _a = getNumbers(), num1 = _a[0], num2 = _a[1];
    result.innerText = "Result: ".concat(num1 * num2);
});
// Division
divideButton.addEventListener("click", function () {
    var _a = getNumbers(), num1 = _a[0], num2 = _a[1];
    if (num2 !== 0) {
        result.innerText = "Result: ".concat(num1 / num2);
    }
    else {
        result.innerText = "Error: Division by zero!";
    }
});
