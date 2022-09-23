const prompt = require("prompt-sync")();

console.log("1:Feet To Inch\n2: Feet To meter\n3:Inch To feet\n4:Meter To Feet\n")
let choice = parseInt(prompt("Enter Your choice : "));
let Value = parseInt(prompt("Enter the Value: "));

switch (choice) {
    case 1:
        console.log("Feet To Inch \n Feet = " + Value + " Inch = " + Value * 12);
        break;
    case 2:
        console.log("Feet To Meter \n Feet = " + Value + " Meter = " + Value * 0.3048);
        break;
    case 3:
        console.log("Inch To Feet \n Inch = " + Value + "  Feet = " + Value * 0.0833333);
        break;
    case 4:
        console.log("Meter To Feet \n Meter = " + Value + " Feet = " + Value * 3.28084);
        break;
    default:
        console.log("Invalid");
        break;
}