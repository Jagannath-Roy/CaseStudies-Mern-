function division(a:number,b:number){
    if(b === 0)
        throw new Error("Cant Divide by zero");
    return a/b;
}

let a:number = 10;
let b:number = 5;

// try{
    const ans = division(a,b);
    console.log(ans);
    
// }
// catch(error:any){
    // console.log(error.message);
    
// }

console.log("Hello.program is continued");
