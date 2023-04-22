import express, { Request, Response } from "express";
import { body } from "express-validator";
import { login } from "../services/login-service";

const router = express.Router();

router.post(
  "/api/users/covid-report",
  [body("email").notEmpty().withMessage("User id must be valid")],
  async (req: Request, res: Response) => {
    const { email: userId } = req.body;
    console.log(`user id logged in ${userId}`);
    await login(userId);
    res.status(201).send("login created successfully");
  }
);

export { router as loginRouter };
