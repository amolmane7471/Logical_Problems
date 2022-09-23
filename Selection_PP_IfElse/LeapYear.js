const prompt = require('prompt-sync')()
var year = prompt("Enter Year:");
checkLeapYear(year);

function checkLeapYear(year){
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) 
{
    console.log(year+ " is a leap year  ");
}
 else
  {
	console.log(year+ " is not a leap year  ");
 }
}