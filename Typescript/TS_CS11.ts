type Transaction = {
  id: number;
  type: "checkout" | "return" | "cancelled" | "priority";
};

const transactions: Transaction[] = [
  { id: 1, type: "checkout" },
  { id: 2, type: "cancelled" },
  { id: 3, type: "return" },
  { id: 4, type: "priority" },
  { id: 5, type: "checkout" }
];


// const counter : {[key:string]:number} = {
    
//   "checkout" : 0,
//    "return" : 0,
//    "priority":0,
//    "cancelled":0

// }

// for (let i = 0;i<transactions.length;i++){
//    const type = transactions[i].type;

//    if(counter[type] !== undefined)
//     counter[type]++;



// }

// console.log(counter);



// Use a while(true) infinite loop with a break condition when a new priority transaction arrives

// while(true){
//    if(transactions.length == 0)
//     break;

//    const txn = transactions.shift()!;

//    console.log("Processing : ",txn);

//    if(txn.type === "priority"){
//     console.log("Priority transaction arrived. Exiting.");
//     break;
//    }
   

// }




// Modify the do…while loop to handle a dynamic queue (an array you can push new returns into).

// let nextId = transactions.length + 1;

// do{
//   const txn = transactions.shift()!;
//    console.log("Processing :",txn);

//    if(txn.type === "checkout"  && Math.random() < 0.5){
//     const newReturn : Transaction ={
//         id : nextId++,
//         type : "return"
//     }

//     console.log("New Return added", newReturn);
//     transactions.push(newReturn);
    
//    }
   




// }while(transactions.length > 0);





// Use for…in to reset all inventory counts to zero.

// const inventory: { [title: string]: number } = {
//   "The Hobbit": 3,
//   "1984": 5,
//   "TypeScript Guide": 2
// };

// console.log("Before Reset :",inventory);

// for(let key in inventory){
//   inventory[key] = 0;
// }

// console.log("After Reset :",inventory);




// Display visitor names in reverse order using a for or for…of loop.

// const visitors: string[] = ["Alice", "Bob", "Carol"];

// for(let name of visitors){
//   console.log(name);
  
// }