import express, { Request, Response } from "express";
import { body } from "express-validator";
import { login } from "../services/login-service";

const router = express.Router();
router.post(
  "/api/users/login",
  [body("email").isEmail().notEmpty().withMessage("Email must be valid")],
  async (req: Request, res: Response) => {
    const { email } = req.body;
    console.log(`Email logged in ${email}`);
    await login(email);
    res.status(201).send("login created successfully");
  }
);

export { router as loginRouter };
