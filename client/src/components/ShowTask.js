import { Box, Text, useToast } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Status from './Status'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { AuthState } from '../context/AuthProvider'

const ShowTask = () => {

    const [tasks, setTasks] = useState([])
    const [todos, setTodos] = useState([])
    const [doing, setDoing] = useState([])
    const [done, setDone] = useState([])

    const {user, fetchAgain, setFetchAgain} = AuthState()

    //get all tasks by user
    useEffect(() => {
        const getTasks = async() => {
            const config = {
                headers: {
                    Authorization: `${user?.token}`
                }
            }
            const {data} = await axios.get('/api/task/get-task', config)

            setTasks(data)
        }
        getTasks()
        
    }, [fetchAgain])

    //filter task according to their status
    useEffect(() => {
        const fTodos = tasks.filter(t => t.status === 'ToDo')
        const fDoing = tasks.filter(t => t.status === 'Doing')
        const fDone = tasks.filter(t => t.status === 'Done')

        setTodos(fTodos);
        setDoing(fDoing);
        setDone(fDone);

    },[tasks])

    const statuses = ["ToDo", "Doing", "Done"]
    const toast = useToast()

    //update status of task
    const handleOnDragEnd = async(result) => {

        console.log(result);
        const {source, destination} = result

        if(!destination)
            return;

        if(source.droppableId === destination.droppableId) {
            return;
        }

        try {
            const config = {
                headers: {
                    Authorization: `${user?.token}`,
                    "Content-type": "application/json",
                }
            }

            const updTask = {
                draggableId: result.draggableId,
                destinationDroppableId: destination.droppableId,
            };

            const {data} = await axios.put('/api/task/update-status', updTask, config)

            if(data) {
                setFetchAgain(!fetchAgain)
                toast({
                    title: "Status Updated Successfully",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                    position: "top"
                })
            }

        } catch (error) {
            toast({
                title: "Error in updating status of task",
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "top"
            })
        }
        
    }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
        <Box
            display='flex'
            justifyContent='center'
            width='100%'
        >
        {statuses.map((status, index) => (
            <Box
                display='flex'
                flexDirection='column'
                width='33%'
                m={3}
            >
                <Text 
                    marginTop={4} 
                    fontSize='2xl'
                    as='b'
                    display='flex' 
                    justifyContent='center'
                >
                    {status}
                </Text>
                
                <Droppable droppableId={status}>
                    {
                        (provided) => (
                            <Box
                                backgroundColor='white'
                                height='100%'
                                borderRadius='10px'
                                key={index}
                                p={3}
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                
                                        <Box
                                        
                                        >
                                            <Status 
                                                key={index} 
                                                status={status}
                                                todos={todos}
                                                doing={doing}
                                                done={done}
                                            />
                                        {provided.placeholder}
                                        </Box>
                                    
                            </Box>
                        )
                    }
                </Droppable>
            </Box>
        ))}
        </Box>
    </DragDropContext>
  )
}

export default ShowTask