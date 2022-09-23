const prompt = require("prompt-sync")();
let firtsNumber = prompt("Enter first number: ");
let secondNumber = prompt("Enter second number: ");

function checkPalindrome(number) {
    let reverseNumber = number.split("").reverse();
    console.log(reverseNumber)
    if (number == reverseNumber.join("")) {
        return true;
    }
    else {
        return false;
    }
}

if (checkPalindrome(firtsNumber) && checkPalindrome(secondNumber)) {
    console.log(" Numbers are palindrome");
}
else {
    console.log("Numbers are Not palindrome");
}