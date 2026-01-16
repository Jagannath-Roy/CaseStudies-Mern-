import  { Request, Response, NextFunction, RequestHandler } from "express";
import express = require("express");

import { z } from "zod";



const app = express();
app.use(express.json()); // parse JSON bodies



class ApiError extends Error {
  constructor(
    public statusCode: number,
    message: string,
    public details?: any
  ) {
    super(message);
  }
}



function validate<T extends z.ZodTypeAny>(schema: T): RequestHandler {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);

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



const db = {
  loyaltyMembers: [
    { customerId: "11111111-1111-1111-1111-111111111111", points: 500 },
    { customerId: "22222222-2222-2222-2222-222222222222", points: 200 },
  ],
};



interface TransferRequest {
  fromCustomerId: string;
  toCustomerId: string;
  points: number;
}


const TransferSchema = z.object({
  fromCustomerId: z.string().uuid(),
  toCustomerId: z.string().uuid(),
  points: z.number().int().positive(),
});



app.post(
  "/transfer",
  validate(TransferSchema), // Step 1: validate input
  async (
    req: Request<{}, {}, TransferRequest>,
    res: Response
  ) => {
    const { fromCustomerId, toCustomerId, points } = req.body;

    // Prevent self-transfer
    if (fromCustomerId === toCustomerId) {
      throw new ApiError(400, "Cannot transfer points to the same account");
    }

    // Find sender
    const sender = db.loyaltyMembers.find(
      m => m.customerId === fromCustomerId
    );
    if (!sender) {
      throw new ApiError(404, "Sender account not found");
    }

    // Find receiver
    const receiver = db.loyaltyMembers.find(
      m => m.customerId === toCustomerId
    );
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
        fromCustomerId,
        toCustomerId,
        transferredPoints: points,
        senderRemainingPoints: sender.points,
      },
    });
  }
);



app.use((
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {

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



const PORT = 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
