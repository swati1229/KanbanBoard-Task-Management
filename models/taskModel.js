const mongoose = require('mongoose');

const taskModel = new mongoose.Schema({
    title: {
        type: String,
        required : true
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: ["To Do", "Doing", "Done"],
        default: "To Do"
    },
    assignedTo: {
        type: mongoose.ObjectId,
        ref: "User"
    }
}, {timestamps: true})

module.exports = mongoose.model('Task', taskModel);