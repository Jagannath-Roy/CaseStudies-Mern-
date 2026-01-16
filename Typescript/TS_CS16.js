var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.update = function (message) {
        console.log("Customer Notified");
    };
    return Customer;
}());
var Inventory = /** @class */ (function () {
    function Inventory() {
    }
    Inventory.prototype.update = function (message) {
        console.log("Inventory Notified");
    };
    return Inventory;
}());
var PromotionSystem = /** @class */ (function () {
    function PromotionSystem() {
    }
    PromotionSystem.prototype.update = function (message) {
        console.log("Promotion System:", " Special Offer! Get 10% off your next drink!");
    };
    return PromotionSystem;
}());
var DrinkOrder = /** @class */ (function () {
    function DrinkOrder() {
        this.observers = [];
    }
    DrinkOrder.prototype.addObservers = function (observer) {
        this.observers.push(observer);
    };
    DrinkOrder.prototype.notifyALL = function (message) {
        this.observers.forEach(function (obs) { return obs.update(message); });
    };
    DrinkOrder.prototype.completeOrder = function () {
        this.notifyALL("Drink is Ready!");
    };
    return DrinkOrder;
}());
var order = new DrinkOrder();
order.addObservers(new Customer());
order.addObservers(new Inventory());
order.addObservers(new PromotionSystem());
order.completeOrder();
