const prompt = require("prompt-sync")();

function checkPalindrome(number) {
    const reverseNumber = parseFloat(number.toString().split('').reverse().join(''));
    console.log("rev number = " +reverseNumber);
    if (number == reverseNumber)
        return true;
    else
        return false;
}

function checkPrime(number) {
    let flag = 0;
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            flag = 1;
            break;
        }
    }
    if (flag == 1)
        return false;
    else
        return true;
}

let number = prompt("Enter number : ");

if (checkPrime(number))
    console.log("Number is prime");
else
    console.log("Number is not prime");

if (checkPalindrome(number))
    console.log("Number is palindrome");
else
    console.log("Number is not palindrome");
