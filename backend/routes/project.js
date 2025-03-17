import express from 'express';
import Project from '../models/Project.js';
import auth from '../middleware/auth.js';
const router = express.Router();

// Create Project
router.post('/', auth, async (req, res) => {
    const { title, description } = req.body;
    const project = new Project({ title, description, user: req.user.id });
    await project.save();
    res.status(201).json(project);
});

// Get Projects
router.get('/', auth, async (req, res) => {
    const projects = await Project.find({ user: req.user.id });
    res.json(projects);
});

export default router;
