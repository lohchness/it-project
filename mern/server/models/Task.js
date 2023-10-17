import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    duedate: {
        type: Date,
        required: true,
    }
})

const Task = mongoose.model("taks", TaskSchema)

export default Task;