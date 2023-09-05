import { Button, FormControl, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea, useDisclosure, useToast } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import { AuthState } from '../context/AuthProvider'

const UpdateTask = ({children, task}) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [title, setTitle] = useState(task.title)
    const [description, setDescription] = useState(task.description)

    const toast = useToast()
    const {user, fetchAgain, setFetchAgain} = AuthState()

    const handleUpdate = async() => {
        try {
            const config = {
                headers: {
                    Authorization: `${user.token}`,
                    "Content-type": "application/json",
                }
            }

            const {data} = await axios.put(`/api/task/update-task/${task._id}`,{title, description}, config)
            
            console.log(user);
            console.log(task);
            console.log(fetchAgain);

            if(data) {
              setFetchAgain(!fetchAgain)
            }

            toast({
                title: 'Task Updated Successfully..!',
                status: 'success',
                duration: 5000,
                isClosable: true,
                position: "top"
            })

        } catch (error) {
            toast({
                title: "Error Occured",
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "top"
              })
        }
        onClose()
    }

    return (
      <>
        <span onClick={onOpen}>{children}</span>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader
                fontSize='35px'
                fontFamily='Work sans'
                display='flex'
                justifyContent='center'
            >
              Update Task
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody
                display='flex'
                flexDirection='column'
                alignItems='center'
            >
              <FormControl>
                <Input
                    placeholder='Add Title' 
                    mb={3} 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} 
                />
              </FormControl>
              <FormControl>
                <Textarea
                    placeholder='Add Description' 
                    mb={1} 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} 
                />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' onClick={handleUpdate}>
                Update Task
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

      </>
    )
}

export default UpdateTask