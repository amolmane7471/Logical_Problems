const prompt = require("prompt-sync")();
let number = parseInt(prompt("Enter any Num 1,10,100,1000,10000:  "));

switch (number) {
    case 1:
        console.log("UNIT");
        break;

    case 10:
        console.log("TEN");
        break;

    case 100:
        console.log("HUNDRED");
        break;

    case 1000:
        console.log("THOUSAND");
        break;

    case 10000:
        console.log("TEN THOUSAND");
        break;

     default:
        console.log("Invalid");
        break;
}