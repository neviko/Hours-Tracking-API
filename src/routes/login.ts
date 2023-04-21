import express, { Request, Response } from "express";
import { body } from "express-validator";

const router = express.Router();

router.post(
  "/api/users/login",
  [body("user_id").notEmpty().withMessage("User id must be valid")],
  async (req: Request, res: Response) => {
    const { user_id: userId } = req.body;

    res.status(201).send({});
  }
);

export { router as loginRouter };
