"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const applicationValidation = [
    (0, express_validator_1.body)("name").isString().notEmpty().withMessage("Name is required"),
    (0, express_validator_1.body)("email").isEmail().withMessage("Valid email is required"),
    (0, express_validator_1.body)("portfolioLink")
        .if((0, express_validator_1.body)("applicationType").equals("Art"))
        .notEmpty()
        .withMessage("Portfolio link is required for art students")
        .bail()
        .isURL()
        .withMessage("A valid portfolio link is required for art students"),
];
app.post("/apply", applicationValidation, (req, res) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    res.json({ status: "Application received" });
});
app.listen(3000, () => {
    console.log("Admissions server running on http://localhost:3000");
});
