import { Avatar, Button, Flex, Heading, Tooltip } from '@chakra-ui/react'
import { AuthState } from '../context/AuthProvider'
import { useNavigate } from 'react-router-dom'
import { AddIcon } from '@chakra-ui/icons'
import CreateTaskModal from '../components/CreateTaskModal'
import ShowTask from '../components/ShowTask'

const TaskPage = () => {

  const {user, fetchAgain, setFetchAgain} = AuthState()

  const navigate = useNavigate()

  const logoutHandler = () => {
    localStorage.removeItem('userInfo')
    navigate('/')
  }

  return (
    <div style={{width: '100%'}}>
      <Flex
        flexDirection='column'
      >
        <Flex
          as="header"
          align="center"
          justify="space-between"
          padding="1rem"
          bg="teal.500"
          color="white"
          boxShadow='xl'
          >
          <Heading
            as='h1'
            size='lg'
            >
            Task Management
          </Heading>
          
          <Flex align="center">
            <Tooltip label={user?.name}>
              <Avatar
                size="sm"
                name={user?.name}
                mr={2}
                />
            </Tooltip>
            <Button colorScheme="red" size='sm'
              onClick={logoutHandler}
              >
              Logout
            </Button>
          </Flex>
        </Flex>

        <CreateTaskModal user={user} fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}>
          <Button
            m={3}
            rightIcon={<AddIcon />}
            >
            Create New Task 
          </Button>
        </CreateTaskModal>

        {user && <ShowTask />}
    
      </Flex>
    </div>
  )
}

export default TaskPage