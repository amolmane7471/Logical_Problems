const prompt = require("prompt-sync")();
let number = prompt("Enter the number : ");

let factorial = 1;

for(let i = 1; i <= number; i++)
{
    factorial *= i;
}
console.log("Factorial Of " + number + " is = " +factorial);