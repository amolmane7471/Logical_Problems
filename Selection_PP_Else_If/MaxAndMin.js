const prompt = require('prompt-sync')();
let firstNum = prompt("Enter Number 1 :");
let secondNum = prompt("Enter Number 2 :");
let thirdNum = prompt("Enter Number 3 :");

firstNum = parseInt(firstNum);
secondNum = parseInt(secondNum);
thirdNum = parseInt(thirdNum);

Result1 = firstNum + secondNum * thirdNum;
Result2 = firstNum % secondNum + thirdNum;
Result3 = thirdNum + firstNum / secondNum;
Result4 = firstNum * secondNum + thirdNum;
let minimumResult = 0;
let maximumResult = 0;

console.log("Result 1 = " + Result1);
console.log("Result 2 = " + Result2);
console.log("Result 3 = " + Result3);
console.log("Result 4 = " + Result4);

if (Result1 < Result2 && Result1 < Result3 && Result1 < Result4) {
    minimumResult = Result1;
}
else if (Result2 < Result1 && Result2 < Result3 && Result2 < Result4) {
    minimumResult = Result2;
}
else if (Result3 < Result1 && Result3 < Result2 && Result3 < Result4) {
    minimumResult = Result3;
}
else {
    minimumResult = Result4;
}

if (Result1 > Result2 && Result1 > Result3 && Result1 > Result4) {
    minimumResult = Result1;
}
else if (Result2 > Result1 && Result2 > Result3 && Result2 > Result4) {
    mminimumResultin = Result2;
}
else if (Result3 > Result1 && Result3 > Result2 && Result3 > Result4) {
    minimumResult = Result3;
}
else {
    maximumResult = Result4;
}

console.log("Maximum = " + maximumResult);

console.log("minimum = " + minimumResult);
