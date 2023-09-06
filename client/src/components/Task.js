import { Box, Tooltip, useToast } from '@chakra-ui/react';
import React from 'react'
import ShowEachTask from './ShowEachTask';
import UpdateTask from './UpdateTask';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { AuthState } from '../context/AuthProvider';
import axios from 'axios';
import { Draggable } from 'react-beautiful-dnd';

const Task = ({task, bg, index}) => {

    const {user, fetchAgain, setFetchAgain} = AuthState()
    const toast = useToast()

    const handleDelete = async() => {
      try {
        const config = {
            headers: {
                Authorization: `${user?.token}`
            }
        }

        const {data} = await axios.delete(`/api/task/delete-task/${task._id}`, config)

        if(data)
        {
            setFetchAgain(!fetchAgain)
        }

        toast({
            title: 'Task Deleted Successfully..!',
            status: 'success',
            duration: 5000,
            isClosable: true,
            position: "top"
        })

      } catch (error) {
        toast({
            title: "Error in deleting task",
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "top"
        })
      }
    }
    
    return (
      <Draggable key={task._id} draggableId={task._id} index={index}>
        {(provided) => (
          <Box
            backgroundColor={bg}
            borderRadius={5}
            my={3}
            padding={2}
            letterSpacing={0.5}
            fontSize='xl'
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <ShowEachTask task={task}>
                {task.title}
            </ShowEachTask>
            
            <UpdateTask task={task}>
              <Tooltip label='Update Task'>
                <EditIcon
                    color='purple'
                    fontSize='2xl'
                    />
              </Tooltip>
            </UpdateTask>
      
            <Tooltip label='Delete Task'>
                <DeleteIcon
                    fontSize='2xl'
                    onClick={handleDelete} 
                    />
            </Tooltip>
          </Box>
        )}
      </Draggable>
    )
  }

export default Task

