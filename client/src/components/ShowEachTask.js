import { Button, FormControl, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Textarea, useDisclosure } from '@chakra-ui/react'

const ShowEachTask = ({task, children}) => {

    const { isOpen, onOpen, onClose } = useDisclosure()

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
                Your Task
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody
                display='flex'
                flexDirection='column'
                alignItems='center'
            >
              <FormControl>
                <Text as='b'>Title :</Text>
                <Input
                    placeholder='Add Title' 
                    mb={3} 
                    value={task.title}
                />
              </FormControl>
              <FormControl>
                <Text as='b'>Description :</Text>
                <Textarea
                    placeholder='Add Description' 
                    mb={1}
                    value={task.description}
                />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

      </>
    )
}

export default ShowEachTask