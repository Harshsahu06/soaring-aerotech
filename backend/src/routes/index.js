import { Router } from "express";
import healthRouter from "./health.js";
import formsRouter from "./forms.js";

const router = Router();

router.use(healthRouter);
router.use("/forms", formsRouter);

export default router;
