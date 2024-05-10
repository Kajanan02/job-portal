import express from "express";
import userAuth from "../middlewares/authMiddleware.js";
import {createJobApplication, getJobApplication} from "../controllers/JobApplicationSchema.js";


const router = express.Router();

router.post("/job-apply-data", userAuth, createJobApplication);
router.get("/get-job-applications",  getJobApplication);

export default router;
