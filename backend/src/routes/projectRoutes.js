import express from "express";
import { saveProject, getAllProjects } from "../controllers/projectController.js";

const router = express.Router();

router.post("/save-project", saveProject);
router.get("/projects", getAllProjects);

export default router;
