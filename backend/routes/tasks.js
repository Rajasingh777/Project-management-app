import express from 'express';
import Task from '../models/Task.js';
import Project from '../models/Project.js';
import auth from '../middleware/auth.js';
const router = express.Router();

// Create Task
router.post('/:projectId', auth, async (req, res) => {
    const { title, description } = req.body;
    const task = new Task({ title, description, project: req.params.projectId });
    await task.save();

    // Add to project
    await Project.findByIdAndUpdate(req.params.projectId, { $push: { tasks: task._id } });
    res.status(201).json(task);
});

// Get Tasks
router.get('/:projectId', auth, async (req, res) => {
    const tasks = await Task.find({ project: req.params.projectId });
    res.json(tasks);
});

export default router;
