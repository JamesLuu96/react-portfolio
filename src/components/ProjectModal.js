import React from 'react'
import {
    useDisclosure, 
    Button, 
    Modal, 
    ModalOverlay, 
    ModalContent, 
    ModalHeader, 
    ModalBody, 
    ModalCloseButton, 
    ModalFooter, 
    Box,
    Flex,
    Text,
    Badge
} from '@chakra-ui/react'
import { LogoGithub, OpenOutline} from 'react-ionicons'

export default function ProjectModal({children, project}) {
    const {projectImage, projectName, github, liveWebsite, tags, projectThoughts, projectDescription} = project
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box
        position="relative"
        textAlign="center"
        border="3px solid grey"
        w="300px"
        h="300px"
        margin="15px"
        className="hoverBorder"
        onClick={onOpen}>
        {children}
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>{projectName}</ModalHeader>
            <ModalCloseButton />
            <ModalBody textAlign="center">
                <Text fontSize="24px" fontWeight="bold" color="#68D391">Description</Text>
                <Text mb="15px">{projectDescription}</Text>
                <Text fontSize="24px" fontWeight="bold" color="#68D391">My Thoughts</Text>
                <Text mb="15px">{projectThoughts}</Text>
                <Text fontSize="24px" fontWeight="bold" color="#68D391">Tags</Text>
                <Flex justifyContent="center" flexDir="row" wrap="wrap" mb="15px">
                    {tags.map((tag, i)=>(
                        <Badge m={3} key="i">{tag}</Badge>
                    ))}
                </Flex>
            </ModalBody>

            <ModalFooter>
                <Button colorScheme="purple" mr={3} onClick={()=>window.open(github, "_blank")}>
                    GitHub <LogoGithub/>
                </Button>
                <Button colorScheme="blue" mr={3} onClick={()=>window.open(liveWebsite, "_blank")}>
                    Live <OpenOutline/>
                </Button>
                <Button colorScheme="red" mr={3} onClick={onClose}>
                Close
                </Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
        </Box>
    )
}
