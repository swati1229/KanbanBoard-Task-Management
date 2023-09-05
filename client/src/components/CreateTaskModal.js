import { Button, FormControl, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea, useDisclosure, useToast } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'

const CreateTaskModal = ({user, children, fetchAgain, setFetchAgain}) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const toast = useToast()

    const handleSubmit = async() => {
        try {
            const config = {
                headers: {
                    Authorization: `${user.token}`,
                    "Content-type": "application/json",
                }
            }

            const {data} = await axios.post('/api/task/create-task',{title, description}, config)
            
            if(data) {
              setFetchAgain(!fetchAgain)
            }
            toast({
                title: 'Task Created Successfully..!',
                status: 'success',
                duration: 5000,
                isClosable: true,
                position: "top"
            })

        } catch (error) {
            toast({
                title: "Error Occured",
                description: error.response.data.message,
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
                Create New Task
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
                    onChange={(e) => setTitle(e.target.value)} 
                />
              </FormControl>
              <FormControl>
                <Textarea
                    placeholder='Add Description' 
                    mb={1} 
                    onChange={(e) => setDescription(e.target.value)} 
                />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' onClick={handleSubmit}>
                Create Task
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

      </>
    )
}

export default CreateTaskModal