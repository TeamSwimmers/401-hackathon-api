import express from "express";

import { JobsRouter } from "./routes/jobs";

const router = express.Router();

router.use("/jobs", JobsRouter);

export { router as DbApiRouter };
