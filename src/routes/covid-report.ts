import express, { Request, Response } from "express";
import { body } from "express-validator";
import { getQuarantineList } from "../services/covid-report-service";

const router = express.Router();
router.post(
  "/api/users/covid-report",
  [body("email").notEmpty().withMessage("Email must be valid")],
  async (req: Request, res: Response) => {
    const { email } = req.body;
    console.log(`Email logged in ${email}`);
    const quarantineList = await getQuarantineList(email);
    if (quarantineList) res.status(200).send(quarantineList);
    else res.status(400).send("Something went wrong");
  }
);

export { router as covidReportRouter };
