"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var routing_controllers_1 = require("routing-controllers");
var order_controller_1 = require("./order.controller");
var baking_controller_1 = require("./baking.controller");
var app = (0, routing_controllers_1.createExpressServer)({
    controllers: [order_controller_1.OrderController, baking_controller_1.BakingController],
});
app.listen(3000, function () {
    console.log("Bakery server running at http://localhost:3000");
});
