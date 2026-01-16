"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
function logDischargeRequest(req, res, next) {
    req.dischargeLog = [];
    req.dischargeLog.push({
        step: "requestreceived",
        time: new Date().toISOString()
    });
    next();
}
app.use(logDischargeRequest);
function insuranceApprovalCheck(req, res, next) {
    if (!req.body.insuranceApproved) {
        return res.status(403).json({
            error: "Insurance approval required before discharge"
        });
    }
    req.dischargeLog.push({
        step: "insuranceApproved",
        time: new Date().toISOString
    });
    next();
}
function doctorSignoffCheck(req, res, next) {
    if (!req.body.doctorSigned) {
        return res.status(400).json({
            error: "Doctor sign-off required before discharge"
        });
    }
    req.dischargeLog.push({
        step: "doctorSignoff",
        time: new Date().toISOString()
    });
    next();
}
function pharmacyReview(req, res, next) {
    if (!req.body.pharmacyChecked) {
        return res.status(400).json({
            error: "Pharmacy review required before discharge"
        });
    }
    req.dischargeLog.push({
        step: "pharmacyReview",
        time: new Date().toISOString()
    });
    next();
}
function followupCheck(req, res, next) {
    if (!req.body.followupScheduled) {
        return res.status(400).json({
            error: "Follow-up appointment must be scheduled"
        });
    }
    req.dischargeLog.push({
        step: "followupScheduled",
        time: new Date().toISOString()
    });
    next();
}
app.post("/discharge", insuranceApprovalCheck, doctorSignoffCheck, pharmacyReview, followupCheck, (req, res) => {
    req.dischargeLog.push({
        step: "dischargeComplete",
        date: new Date().toISOString()
    });
    res.json({
        Patient: "req.body.patientName",
        status: "Discharge Complete",
        log: req.dischargeLog
    });
});
function errorHandler(err, req, res, next) {
    console.error("Discharge  log :", req.dischargeLog);
    res.status(500).json({
        error: err.message || "Internal Server Error"
    });
}
app.use(errorHandler);
app.listen(3000, () => {
    console.log("Hospital system running on http://localhost:3000 ");
});
