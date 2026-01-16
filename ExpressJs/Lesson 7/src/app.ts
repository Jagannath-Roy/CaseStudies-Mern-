import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";

const app = express();
app.use(express.json());

const applicationValidation = [
  body("name").isString().notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Valid email is required"),
  body("portfolioLink")
  .if(body("applicationType").equals("Art"))
  .notEmpty()
  .withMessage("Portfolio link is required for art students")
  .bail()
  .isURL()
  .withMessage("A valid portfolio link is required for art students"),

];

app.post("/apply", applicationValidation, (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  res.json({ status: "Application received" });
});

app.listen(3000, () => {
  console.log("Admissions server running on http://localhost:3000");
});
