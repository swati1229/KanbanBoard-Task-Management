const Task = require('../models/taskModel')

//create new task 
const createTaskController = async(req, res) => {
    try {
        const { title , description } = req.body;

        if(!title || !description)
        {
            return res.status(400).send({message: "Please, Provide complete details"})
        }

        const newTask = await new Task({
            title, description, assignedTo: req.user._id
        }).save();

        return res.status(200).send({
            success: true,
            message: "Task created successfully",
            _id: newTask._id,
            title: newTask.title,
            description: newTask.description,
            status: newTask.status,
            assignedTo: newTask.assignedTo
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success : false,
            message: "Error in creating new Task",
            error
        })
    }
}

//get all task by user
const getTaskController = async(req, res) => {
    try {
        const userId = req.user._id;

        await Task.find({assignedTo: userId})
            .then(task => {
                res.json(task)
            })
            .catch(err => {
                console.log(err);
                res.status(400).json({message: "Failed to get tasks"})
            })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success : false,
            message: "Error in getting tasks",
            error
        })
    }
}

// //get single task by user
// const singleTaskController = async(req, res) => {
//     try {
//         const tId = req.params.id;
        
//         const task = await Task.findById(tId);

//         if(!task)
//         {
//             return res.status(400).send({message: 'Task not found'})
//         }

//         return res.status(200).send(task)

//     } catch (error) {
//         console.log(error);
//         res.status(500).send({
//             success : false,
//             message: "Error in getting single task",
//             error
//         })
//     }
// }

//update task
const updateTaskController = async(req, res) => {
    try {
        const { title, description } = req.body;
        const taskId = req.params.id;

        const updatedTask = await Task.findByIdAndUpdate(taskId, {title: title, description: description}, {new: true})

        if(!updatedTask)
        {
            return res.status(400).send({message: "Task not found"})
        }

        return res.status(200).send(updatedTask)

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success : false,
            message: "Error in updating task",
            error
        })
    }
}

//delete task
const deleteTaskController = async(req, res) => {
    try {

        const taskId = req.params.id

        const task = await Task.findById(taskId)

        if(!task)
        {
            return res.status(400).send({message: "Task not found"})
        }

        await Task.findByIdAndDelete(req.params.id)

        res.status(200).send({
            success: true,
            message: 'Task deleted successfully',
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success : false,
            message: "Error in deleting task",
            error
        })
    }
}

//update status
const updateStatusController = async(req, res) => {
    try {
        const { draggableId, destinationDroppableId } = req.body;

        const updatedStatus = await Task.findByIdAndUpdate(draggableId, {status: destinationDroppableId}, {new: true})

        if(!updatedStatus)
        {
            return res.status(400).send({message: "Task not found"})
        }

        return res.status(200).send(updatedStatus)

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success : false,
            message: "Error in updating status",
            error
        })
    }
}

module.exports = {createTaskController, getTaskController, updateTaskController, deleteTaskController, updateStatusController}