//1.Create a variable for your favorite fruit and print it
var fruit = "Apple";
console.log(fruit);
//2.Write a function that takes a number and prints double its value
function doubleValue(num) {
    return num * 2;
}
console.log(doubleValue(10));
// 3.Add a single-line and a multi-line comment to your code.
/* Hello everyone...
I am enjoing learning Typescript*/
//4.Define a class called Person with a method sayHello that prints a greeting
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function () {
        console.log("Good morning everyone!!");
    };
    return Person;
}());
var obj = new Person();
obj.greet();
