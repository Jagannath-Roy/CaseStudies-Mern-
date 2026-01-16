"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var zod_1 = require("zod");
/* =====================================================
   1. EXPRESS APP
===================================================== */
var app = express();
app.use(express.json()); // parse JSON bodies
/* =====================================================
   2. CUSTOM ERROR CLASS
===================================================== */
var ApiError = /** @class */ (function (_super) {
    __extends(ApiError, _super);
    function ApiError(statusCode, message, details) {
        var _this = _super.call(this, message) || this;
        _this.statusCode = statusCode;
        _this.details = details;
        return _this;
    }
    return ApiError;
}(Error));
/* =====================================================
   3. VALIDATION MIDDLEWARE (GENERIC)
===================================================== */
function validate(schema) {
    return function (req, res, next) {
        var result = schema.safeParse(req.body);
        // If validation fails, stop request here
        if (!result.success) {
            return res.status(400).json({
                status: "error",
                error: result.error.errors[0].message,
            });
        }
        // Replace req.body with validated data
        req.body = result.data;
        next();
    };
}
/* =====================================================
   4. MOCK DATABASE
===================================================== */
var db = {
    loyaltyMembers: [
        { customerId: "11111111-1111-1111-1111-111111111111", points: 500 },
        { customerId: "22222222-2222-2222-2222-222222222222", points: 200 },
    ],
};
/* =====================================================
   6. ZOD SCHEMA
===================================================== */
var TransferSchema = zod_1.z.object({
    fromCustomerId: zod_1.z.string().uuid(),
    toCustomerId: zod_1.z.string().uuid(),
    points: zod_1.z.number().int().positive(),
});
/* =====================================================
   7. TRANSFER ENDPOINT
===================================================== */
app.post("/transfer", validate(TransferSchema), // Step 1: validate input
function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, fromCustomerId, toCustomerId, points, sender, receiver;
    return __generator(this, function (_b) {
        _a = req.body, fromCustomerId = _a.fromCustomerId, toCustomerId = _a.toCustomerId, points = _a.points;
        // Prevent self-transfer
        if (fromCustomerId === toCustomerId) {
            throw new ApiError(400, "Cannot transfer points to the same account");
        }
        sender = db.loyaltyMembers.find(function (m) { return m.customerId === fromCustomerId; });
        if (!sender) {
            throw new ApiError(404, "Sender account not found");
        }
        receiver = db.loyaltyMembers.find(function (m) { return m.customerId === toCustomerId; });
        if (!receiver) {
            throw new ApiError(404, "Receiver account not found");
        }
        // Check sender balance
        if (sender.points < points) {
            throw new ApiError(400, "Insufficient points for transfer");
        }
        // Perform transfer
        sender.points -= points;
        receiver.points += points;
        // Success response
        res.json({
            status: "success",
            data: {
                fromCustomerId: fromCustomerId,
                toCustomerId: toCustomerId,
                transferredPoints: points,
                senderRemainingPoints: sender.points,
            },
        });
        return [2 /*return*/];
    });
}); });
/* =====================================================
   8. GLOBAL ERROR HANDLER
===================================================== */
app.use(function (err, req, res, next) {
    // Controlled business errors
    if (err instanceof ApiError) {
        return res.status(err.statusCode).json({
            status: "error",
            error: err.message,
            details: err.details,
        });
    }
    // Unexpected errors
    console.error(err);
    res.status(500).json({
        status: "error",
        error: "Internal server error",
    });
});
/* =====================================================
   9. START SERVER
===================================================== */
var PORT = 3000;
app.listen(PORT, function () {
    console.log("\uD83D\uDE80 Server running on http://localhost:".concat(PORT));
});
