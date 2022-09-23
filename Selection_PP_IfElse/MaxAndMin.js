let maxNumber = 100
let minNumber = 999

function generateRandomNumber(){
    return Math.round(Math.random() * 900 + 100);
}

 for(index = 1; index <= 5; index++){
    let number = generateRandomNumber();
    console.log("Num" + index + " : " + number);
    if(number < minNumber)
        minNumber = number;
    if(number > maxNumber)
        maxNumber = number;
}

console.log("Max Number = " + maxNumber);
console.log("Min Number = " + minNumber);
