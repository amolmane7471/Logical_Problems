const prompt = require("prompt-sync")();

let number = parseInt(prompt("Enter a Number : "));
let isPrime = true;

if (number === 1) {
    console.log("1 is Neither Prime Nor Composite Number");
}

if (number > 1) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(number + " is a Prime Number");
    }
    else {
        console.log(number + " is not a Prime Number");
    }
}