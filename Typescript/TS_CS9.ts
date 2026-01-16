//Define a CustomerID alias for string
type CustomerID = string;

//Create a Customer object alias with id: CustomerID, name: string, and optional email?: string.

type Customer = {
  id: CustomerID;
  name: string;
  email?: string;
};

//Implement a processOrder function type alias that accepts orderId: number and a callback (status: OrderStatus) => void.

enum OrderStatus {
  Placed = "Placed",
  Shipped = "Shipped",
  Delivered = "Delivered"
}

type ProcessOrder = (orderId: number, callback: (status: OrderStatus) => void) => void;


const processOrder: ProcessOrder = (orderId, callback) => {
  console.log(`Processing order ${orderId}...`);

  const status: OrderStatus = OrderStatus.Shipped;

  callback(status);
};


processOrder(101, (status) => {
  console.log("Order status:", status);
});




type Container<T> = { value: T; timestamp: Date };

let customer:Customer = {
    id:"nsjfndj",
    name:"Jagannath"
}
let customerContainer: Container<Customer> = {
  value: customer,
  timestamp: new Date()
};
console.log(customerContainer)