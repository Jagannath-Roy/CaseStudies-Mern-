function processTransaction(amount, description, isCredit) {
    // If amount is negative, throw error (never returns)
    if (amount < 0) {
        throw new Error("Amount cannot be negative");
    }
    var type = isCredit ? "Credit" : "Debit";
    var finalDescription = description || "No description provided";
    console.log("Transaction Summary");
    console.log("-------------------");
    console.log("Amount:", amount);
    console.log("Type:", type);
    console.log("Description:", finalDescription);
}
processTransaction(500, "Salary credited", true);
processTransaction(200, undefined, false);
//processTransaction(-50, "Invalid", true); // throws error
