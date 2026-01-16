function processTransaction(
  amount: number,
  description: string | undefined,
  isCredit: boolean
): void {

  // If amount is negative, throw error (never returns)
  if (amount < 0) {
    throw new Error("Amount cannot be negative");
  }

  const type: string = isCredit ? "Credit" : "Debit";
   
   
  const finalDescription: string = description || "No description provided";

  console.log("Transaction Summary");
  console.log("-------------------");
  console.log("Amount:", amount);
  console.log("Type:", type);
  console.log("Description:", finalDescription);
}

processTransaction(500, "Salary credited", true);
processTransaction(200, undefined, false);
//processTransaction(-50, "Invalid", true); // throws error

