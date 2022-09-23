const prompt = require('prompt-sync')();
let day = prompt('Enter Number Between 1 To 7: ');
day = parseInt(day);

if(day == 1){
    console.log("SUNDAY");
}
else if(day == 2){
    console.log("MONDAY");
}
else if(day == 3){
    console.log("TUESDAY");
}
else if(day == 4){
    console.log("WEDNESDAY");
}
else if(day == 5){
    console.log("THURSDAY");
}
else if(day == 6){
    console.log("FRIDAY");
}
else
{
    console.log(" SATURDAY");
}
