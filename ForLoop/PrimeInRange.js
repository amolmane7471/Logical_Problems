const prompt = require("prompt-sync")();

const lowRange = parseInt(prompt('Enter lower number: '));
const highRange = parseInt(prompt('Enter higher number: '));

console.log("The prime numbers between " + lowRange + " and "  + highRange + " are:");

for (let i = lowRange; i <= highRange; i++) {
    let flag = 0;

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}