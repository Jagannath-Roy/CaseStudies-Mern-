use("Lesson3");

const aliceId = ObjectId();
const bobId = ObjectId();

db.users.insertMany([
  { _id: aliceId, name: "Alice", balance: 500 },
  { _id: bobId, name: "Bob", balance: 300 }
]);

const txnId = ObjectId();

db.transactions.insertOne({
  _id: txnId,
  from: aliceId,
  to: bobId,
  amount: 100,
  date: new Date(),
  status: "completed"
});


const session = db.getMongo().startSession();
const sdb = session.getDatabase("Lesson3");
const users = sdb.users;
const txns = sdb.transactions;

session.startTransaction();

try {
  const recipient = users.findOne({ _id: bobId });

  if (!recipient || recipient.balance < 100) {
    throw new Error("Recipient does not have enough balance");
  }

  users.updateOne(
    { _id: aliceId },
    { $inc: { balance: 100 } },
    { session }
  );

  users.updateOne(
    { _id: bobId },
    { $inc: { balance: -100 } },
    { session }
  );

  txns.updateOne(
    { _id: txnId },
    { $set: { status: "refunded" } },
    { session }
  );

  txns.insertOne(
    {
      type: "refund",
      from: bobId,
      to: aliceId,
      amount: 100,
      relatedTo: txnId,
      status: "completed",
      createdAt: new Date()
    },
    { session }
  );

  session.commitTransaction();
  print("Refund successful");

} catch (e) {
  session.abortTransaction();
  print("Refund failed:", e.message);
} finally {
  session.endSession();
}
