var score = 50;
console.log("Outside block score =", score);
if (true) {
    var score_1 = 100; // block-scoped variable
    console.log("Inside block score =", score_1);
    // Try to re-declare score in the same block
    // let score: number = 200; // Error: Cannot redeclare block-scoped variable 'score'
}
var COUNTRY = "India";
console.log("Country =", COUNTRY);
// Try to change the constant
//COUNTRY = "USA"; //  Error: Cannot assign to 'COUNTRY' because it is a constant
