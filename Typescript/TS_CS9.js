//Implement a processOrder function type alias that accepts orderId: number and a callback (status: OrderStatus) => void.
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Placed"] = "Placed";
    OrderStatus["Shipped"] = "Shipped";
    OrderStatus["Delivered"] = "Delivered";
})(OrderStatus || (OrderStatus = {}));
var processOrder = function (orderId, callback) {
    console.log("Processing order ".concat(orderId, "..."));
    var status = OrderStatus.Shipped;
    callback(status);
};
processOrder(101, function (status) {
    console.log("Order status:", status);
});
var customer = {
    id: "nsjfndj",
    name: "Jagannath"
};
var customerContainer = {
    value: customer,
    timestamp: new Date()
};
console.log(customerContainer);
