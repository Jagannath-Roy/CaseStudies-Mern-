import express, {Request,Response,NextFunction} from "express";
import { log } from "node:console";

const app = express();

app.use(express.json());

function logDischargeRequest(req:Request,res:Response,next:NextFunction){

    (req as any).dischargeLog = [];
    (req as any).dischargeLog.push({
        step : "requestreceived",
        time : new Date().toISOString()
    });

    next();



}

app.use(logDischargeRequest);




function insuranceApprovalCheck(req:Request,res:Response,next:NextFunction){

    if(!req.body.insuranceApproved){
        return res.status(403).json({
            error : "Insurance approval required before discharge"
        });
    }

    (req as any).dischargeLog.push({
        step : "insuranceApproved",
        time : new Date().toISOString
    });

   next();

    

}





function doctorSignoffCheck(req: Request, res: Response, next: NextFunction) {
  if (!req.body.doctorSigned) {
    return res.status(400).json({
      error: "Doctor sign-off required before discharge"
    });
  }

  (req as any).dischargeLog.push({
    step: "doctorSignoff",
    time: new Date().toISOString()
  });

  next();
}



function pharmacyReview(req: Request, res: Response, next: NextFunction) {
  if (!req.body.pharmacyChecked) {
    return res.status(400).json({
      error: "Pharmacy review required before discharge"
    });
  }

  (req as any).dischargeLog.push({
    step: "pharmacyReview",
    time: new Date().toISOString()
  });

  next();
}



function followupCheck(req: Request, res: Response, next: NextFunction) {
  if (!req.body.followupScheduled) {
    return res.status(400).json({
      error: "Follow-up appointment must be scheduled"
    });
  }

  (req as any).dischargeLog.push({
    step: "followupScheduled",
    time: new Date().toISOString()
  });

  next();
}


app.post("/discharge",insuranceApprovalCheck,doctorSignoffCheck,pharmacyReview,followupCheck,(req:Request,res:Response)=>{

   (req as any).dischargeLog.push({
    step : "dischargeComplete",
    date : new Date().toISOString()

   });

   res.json({
      Patient: "req.body.patientName",
      status : "Discharge Complete",
      log : (req as any).dischargeLog
   });



});

function errorHandler(err:Error,req:Request,res:Response,next:NextFunction){
    console.error("Discharge  log :",(req as any).dischargeLog);

    res.status(500).json({
        error : err.message || "Internal Server Error"
    });
}

app.use(errorHandler);

app.listen(3000,()=>{

    console.log("Hospital system running on http://localhost:3000 ");
    

});