import { Container, Text } from '@chakra-ui/react'
import React from 'react'
import ScrollableFeed from 'react-scrollable-feed'
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
    <ScrollableFeed>
      <Container>
        <Text fontSize='2xl'as='b'display='flex' justifyContent='center'>
          {text}
        </Text>
        {
          taskToMap.length > 0 && taskToMap.map((task) => (
            <Task key={task._id} task={task} bg={bg} />
          ))
        }
      </Container>
    </ScrollableFeed>
  )
}

export default Status