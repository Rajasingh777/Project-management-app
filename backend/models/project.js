import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
});

export default mongoose.model('Project', projectSchema);
