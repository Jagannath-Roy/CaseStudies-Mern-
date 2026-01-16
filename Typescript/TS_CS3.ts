//1.Declare a variable called city and assign it your favorite city as a string.

let city:string = "Kolkata";
console.log(city);


//2.Declare a variable called temperature with type number and assign it a value.

let temperature:number = 16;
console.log(temperature);


//3.Create a variable called isRaining and let TypeScript infer its type from the value you assign.

let isRaining = false;
console.log(typeof(isRaining));
//isRaining = "no"; //error

/*Write a function called weatherReport that takes city, temperature, and isRaining as parameters and prints a message like:
"In <city>, it is <temperature>°C. Is it raining? <true/false>"*/

function weatherReport(city:string,temperature:number,isRaining:boolean){
console.log(`In ${city}, it is ${temperature}°C. Is it raining?-${isRaining}`);


}

weatherReport(city,temperature,isRaining);
