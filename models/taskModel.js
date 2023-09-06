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
        enum: ["ToDo", "Doing", "Done"],
        default: "ToDo"
    },
    assignedTo: {
        type: mongoose.ObjectId,
        ref: "User"
    }
}, {timestamps: true})

module.exports = mongoose.model('Task', taskModel);