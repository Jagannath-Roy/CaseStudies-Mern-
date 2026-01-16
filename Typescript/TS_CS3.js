//1.Declare a variable called city and assign it your favorite city as a string.
var city = "Kolkata";
console.log(city);
//2.Declare a variable called temperature with type number and assign it a value.
var temperature = 16;
console.log(temperature);
//3.Create a variable called isRaining and let TypeScript infer its type from the value you assign.
var isRaining = false;
console.log(typeof (isRaining));
//isRaining = "no"; //error
/*Write a function called weatherReport that takes city, temperature, and isRaining as parameters and prints a message like:
"In <city>, it is <temperature>°C. Is it raining? <true/false>"*/
function weatherReport(city, temperature, isRaining) {
    console.log("In ".concat(city, ", it is ").concat(temperature, "\u00B0C. Is it raining?-").concat(isRaining));
}
weatherReport(city, temperature, isRaining);
