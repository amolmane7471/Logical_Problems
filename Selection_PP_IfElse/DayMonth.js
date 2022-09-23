const prompt = require('prompt-sync')();
console.log("<<< Welcome >>>")
let date = prompt("Enter day  : ");
let month = prompt("Enter month : ");

console.log("Date : " + date + " Month : " + month );

if (month<3 || month>6) 
	console.log("False"); 
else if((date<20 && month==3) || (date>20 && month==6)) 
	console.log("False");
else
    console.log("True");
