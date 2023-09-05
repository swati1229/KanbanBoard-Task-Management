import { Box, HStack } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Status from './Status'

const ShowTask = ({user, fetchAgain}) => {

    const [tasks, setTasks] = useState([])
    const [todos, setTodos] = useState([])
    const [doing, setDoing] = useState([])
    const [done, setDone] = useState([])

    //get all tasks by user
    useEffect(() => {
        const getTasks = async() => {
            const config = {
                headers: {
                    Authorization: `${user.token}`
                }
            }
            const {data} = await axios.get('/api/task/get-task', config)

            setTasks(data)
        }
        getTasks()
        
    }, [fetchAgain])

    //filter task according to their status
    useEffect(() => {
        const fTodos = tasks.filter(t => t.status === 'To Do')
        const fDoing = tasks.filter(t => t.status === 'Doing')
        const fDone = tasks.filter(t => t.status === 'Done')

        setTodos(fTodos);
        setDoing(fDoing);
        setDone(fDone);

    },[tasks])

    const statuses = ["ToDo", "Doing", "Done"]

  return (
    <HStack
        m={3}
        height='80vh'
        borderRadius='10px'
    >
        {statuses.map((status, index) => (
            <Box
                backgroundColor='white'
                height='100%'
                width='33%'
                borderRadius='10px'
                padding='20px 30px'
                key={index}
            >
                <Status 
                    key={index} 
                    status={status}
                    todos={todos}
                    doing={doing}
                    done={done}
                />
            </Box>
        ))}
    </HStack>
  )
}

export default ShowTask