"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
app.use(express_1.default.json());
var products = [
    { id: "1", name: "Bananas", price: 1.5, instock: true },
    { id: "2", name: "Apples", price: 2.0, instock: false }
];
// GET all products
app.get("/products", function (req, res) {
    res.status(200).json(products);
});
// GET product by id
app.get("/products/:id", function (req, res) {
    var product = products.find(function (p) { return p.id === req.params.id; });
    if (!product)
        return res.status(404).json({ error: "Product not found" });
    res.json(product);
});
// POST new product
app.post("/products", function (req, res) {
    var _a = req.body, name = _a.name, price = _a.price, instock = _a.instock;
    if (!name || price === undefined || instock === undefined) {
        return res.status(400).json({ error: "Missing fields" });
    }
    var newProduct = {
        id: (products.length + 1).toString(),
        name: name,
        price: price,
        instock: instock
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
});
// PUT update product
app.put("/products/:id", function (req, res) {
    var index = products.findIndex(function (p) { return p.id === req.params.id; });
    if (index === -1)
        return res.status(404).json({ error: "Product not found" });
    var _a = req.body, name = _a.name, price = _a.price, instock = _a.instock;
    if (!name || price === undefined || instock === undefined) {
        return res.status(400).json({ error: "Missing fields" });
    }
    products[index] = { id: req.params.id, name: name, price: price, instock: instock };
    res.json(products[index]);
});
// PATCH update price
app.patch("/products/:id/price", function (req, res) {
    var product = products.find(function (p) { return p.id === req.params.id; });
    if (!product)
        return res.status(404).json({ error: "Product not found" });
    var price = req.body.price;
    if (typeof price !== "number" || price < 0) {
        return res.status(400).json({ error: "Invalid price" });
    }
    product.price = price;
    res.json(product);
});
// DELETE product
app.delete("/products/:id", function (req, res) {
    var index = products.findIndex(function (p) { return p.id === req.params.id; });
    if (index === -1)
        return res.status(404).json({ error: "Product not found" });
    products.splice(index, 1);
    res.sendStatus(204);
});
app.listen(3000, function () {
    console.log("Server running on http://localhost:3000");
});
