const prompt = require('prompt-sync')();
let number = prompt('Enter Single Digit Number : ');
number = parseInt(number);


if (number == 0){
    console.log("Num In Word = ZERO");
}
else if(number == 1){
    console.log("Num In Word = ONE");
}
else if(number == 2){
    console.log("Num In Word = TWO");
}
else if(number == 3){
    console.log("Num In Word = THREE");
}
else if(number == 4){
    console.log("Num In Word = FOUR");
}
else if(number == 5){
    console.log("Num In Word = FIVE");
}
else if(number == 6){
    console.log("Num In Word = SIX");
}
else if(number == 7){
    console.log("Num In Word = SEVEN");
}
else if(number == 8){
    console.log("Num In Word = EIGHT");
}
else{
    console.log("Num In Word = NINE");
}