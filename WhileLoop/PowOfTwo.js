const prompt = require("prompt-sync")();
let number = prompt("Enter The Range : ");

let endPoint = Math.pow(2, number);
let result = 1;
let i = 1;
while((i <= endPoint) && (result <= endPoint) && (result < 256)) {
    result *= 2;
    console.log("2 ^ " + i + " = " + result);
    i++;
}