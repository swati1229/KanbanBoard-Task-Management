import React from 'react'
import Task from './Task'

const Status = ({status, todos, doing, done}) => {

  let bg = '#a9bad4'
  let taskToMap = todos

  if(status === 'Doing') {
    bg = '#a3dfc7'
    taskToMap = doing
  }

  if(status === 'Done') {
    bg = '#abe373'
    taskToMap = done
  }

  return (
    <>
      {
        taskToMap.map((task, index) => (
          <Task key={task._id} task={task} bg={bg} index={index} />
          ))
      }
    </>
  )
}

export default Status