const prompt = require('prompt-Sync')();
let num = prompt("Enter any Number From 1,10,100,1000 : ")
num = parseInt(num)

if(num == 1){
    console.log("UNITS");
}
else if(num == 10){
    console.log("TENS");
}
else if(num == 100){
    console.log("HUNDREDS");
}
else if(num == 1000){
    console.log("THOUSANDS");
}
else{
    console.log("Enter Valid Number")
}