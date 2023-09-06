import { Box, Container, Text } from '@chakra-ui/react'
import React from 'react'
import Task from './Task'

const Status = ({status, todos, doing, done}) => {

  let text = "ToDo"
  let bg = '#a9bad4'
  let taskToMap = todos

  if(status === 'Doing') {
    text = "Doing"
    bg = '#a3dfc7'
    taskToMap = doing
  }

  if(status === 'Done') {
    text = 'Done'
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