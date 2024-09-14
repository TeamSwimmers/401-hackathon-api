import express from "express";
import { api_db as prisma } from "../../db-client";
import cleaner from "../../utils/cleaner";

const router = express.Router();

router.get("", async (req, res) => {
  const jobs = await prisma.job.findMany();
  cleaner(jobs, "createdAt", "updatedAt", "applicants", "stages", "website");
  return res.status(200).json(jobs);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const job = await prisma.job.findUnique({ where: { id } });
  if (!job) {
    return res.status(404).json({ message: "not found" });
  }
  cleaner([job], "createdAt", "updatedAt", "applicants", "stages", "website");
  return res.status(200).json(job);
});

export { router as JobsRouter };
