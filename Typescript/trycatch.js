function division(a, b) {
    if (b === 0)
        throw new Error("Cant Divide by zero");
    return a / b;
}
var a = 10;
var b = 5;
// try{
var ans = division(a, b);
console.log(ans);
// }
// catch(error:any){
// console.log(error.message);
// }
console.log("Hello.program is continued");
