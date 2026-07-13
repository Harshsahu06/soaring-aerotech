import { Router } from "express";
import healthRouter from "./health.js";
import formsRouter from "./forms.js";
import authRouter from "./auth.js";

const router = Router();

router.use(healthRouter);
router.use("/forms", formsRouter);
router.use("/auth", authRouter);

export default router;
