
console.log("Convert Area in meters");
let rectangleArea = 60 * 40;
console.log("Area of Plot in feet : " + rectangleArea + "ft");
console.log("1 ft = 0.3048 meter");
let rectangleAreaInMeter = rectangleArea * 0.3048;
console.log("Area of plot in meters : " + rectangleAreaInMeter + "  meters");

console.log("Calculate Area of 25 such Plots");
let totalAreaInFeet = rectangleArea * 25;
console.log("Area of 25 Plot in feet: " + totalAreaInFeet + " ft");
let totalAreaInMeters = rectangleAreaInMeter * 25;
console.log("Area of 25 Plot in meters: " + totalAreaInMeters + " meters");
