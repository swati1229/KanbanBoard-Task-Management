const express = require('express')
const { createTaskController, updateTaskController, deleteTaskController, getTaskController, updateStatusController } = require('../controllers/taskController')
const { requireSignIn } = require('../middleware/authMiddleware')
const router = express.Router()

//create task
router.post('/create-task', requireSignIn, createTaskController)

//get all task by that user
router.get('/get-task', requireSignIn, getTaskController)

// //get single task
// router.get('/single-task/:id', requireSignIn, singleTaskController)

//edit task
router.put('/update-task/:id', requireSignIn, updateTaskController)

//delete task
router.delete('/delete-task/:id', requireSignIn, deleteTaskController)

//update status of task
router.put('/update-status', requireSignIn, updateStatusController)

module.exports = router