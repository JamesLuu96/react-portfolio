import React from 'react'
import {useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, ModalFooter, Box} from '@chakra-ui/react'
import { LogoGithub, OpenOutline} from 'react-ionicons'

export default function ProjectModal({children, project}) {
    const {projectImage, projectName, github, liveWebsite, tags} = project
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
            <ModalBody>
                Body
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
