import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    duedate: {
        type: String,
        required: true,
    }
})

const Task = mongoose.model("newtasks", TaskSchema);

export default Task;