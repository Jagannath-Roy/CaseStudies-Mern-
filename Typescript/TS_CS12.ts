
// Call displayMember for two members: one with email, one without.

// function displayMember(id:number,name:string,email?:string):void{
//   console.log(`ID :${id} \n Name : ${name}`);
//   if(email){
//     console.log(`Email-ID : ${email}`);
    
//   }
  

// }

// displayMember(1,"Jagannath","jagaroy10@gmail.com");
// displayMember(2,"StarPanda",);








// Use calculateFines to sum fines: 5, 10, 2.5.

// function calculateFines(...fines: number[]): number {
//   let total = 0;
//   for (let fine of fines){
//     total += fine;
//   }
//   return total;
// }

// console.log(calculateFines(5,10,2.5));






// Compute a membership fee for $100 with default discount, then with 20%.
// function membershipFee(price: number, discountRate: number = 0.1): number {
//   return price - price * discountRate;
// }

// console.log("Discounted Fee :",membershipFee(100));
// console.log("Discounted Fee after 20% :",membershipFee(100,0.2));




// Greet visitors “Alice” and “Bob” using both vipGreet and consoleGreet.
// function greetVisitor(visitor:string,formatter : (name:string)=>void):void{
   
//     formatter(visitor);

// }

// const vipGreet = (name:string) => console.log(`Hello VIP ${name}`);

// greetVisitor("Jagannath",vipGreet);








// Compute factorial(5).

// function factorial(num:number):number{
//     if(num === 1)
//         return 1;
//     return num * factorial(num-1);
// }

// console.log("Factorial of 5 :",factorial(5));





// Generate a text report and a JSON report for an array of sample objects (e.g., { title: "1984" }).


type Book = {
  title: string;
};

const books:Book[]=[
    {
     title : "1984"
    },
    {
     title : "Brave New World"
    },
    {
   title : "Fahrenheit 1984"
    },
]

 //TEXT REPORT

// function reportGenerator(books:{title :string}[]):string{
//      let report = "Book report\n"
//      report = report + "=========\n";

//      for(let i = 0;i<books.length;i++){
//         report += `${i+1}.${books[i].title}.\n`;
//      }



//     return report;
// }

// console.log(reportGenerator(books));



//JSON REPORT
// function generateJsonReport(books: { title: string }[]): string {
//   return JSON.stringify(
//     books,
//     null,
//     2
//   );
// }
//  console.log(generateJsonReport(books));