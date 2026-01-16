let score: number = 50;
console.log("Outside block score =", score);

if (true) {
    let score: number = 100; // block-scoped variable
    console.log("Inside block score =", score);

    // Try to re-declare score in the same block
    // let score: number = 200; // Error: Cannot redeclare block-scoped variable 'score'
}

const COUNTRY: string = "India";
console.log("Country =", COUNTRY);

// Try to change the constant
//COUNTRY = "USA"; //  Error: Cannot assign to 'COUNTRY' because it is a constant
