import express, { Request, Response } from "express";
import { body } from "express-validator";
import { logout } from "../services/logout-service";

const router = express.Router();

router.post(
  "/api/users/logout",
  [body("email").notEmpty().withMessage("User id must be valid")],
  async (req: Request, res: Response) => {
    const { email: userId } = req.body;
    await logout(userId);
    console.log(`user id logged out ${userId}`);
    res.status(201).send("logout created successfully");
  }
);

export { router as logoutRouter };
