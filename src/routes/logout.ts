import express, { Request, Response } from "express";
import { body } from "express-validator";
import { logout } from "../services/logout-service";

const router = express.Router();
router.post(
  "/api/users/logout",
  [body("email").isEmail().withMessage("Email must be valid")],
  async (req: Request, res: Response) => {
    const { email } = req.body;
    await logout(email);
    console.log(`Email logged out ${email}`);
    res.status(201).send("logout created successfully");
  }
);

export { router as logoutRouter };
