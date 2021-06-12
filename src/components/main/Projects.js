import React, {useState} from 'react'
import {Accordion, Form, Button, AccordionItem, AccordionPanel, AccordionButton, AccordionIcon, Box} from '@chakra-ui/react'

export default function Projects() {
    const [filterProject, setFilterProject] = useState()
    return (
        <div>
            Projects
            <Accordion allowToggle w={"50%"}>
                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box flex="1" textAlign="left">
                        Advanced Filter
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    
                    <AccordionPanel pb={4} display="flex" justifyContent="center" flexWrap="wrap">
                        <Button m={2}>React.js</Button>
                        <Button m={2}>Javascript</Button>
                        <Button m={2}>GraphQL</Button>
                        <Button m={2}>MongoDB</Button>
                        <Button m={2}>SQL</Button>
                        <Button m={2}>SQL</Button>
                        <Button m={2}>SQL</Button>
                        <Button m={2}>SQL</Button>
                        <Button m={2}>SQL</Button>
                        <Button m={2}>SQL</Button>
                        <Button m={2}>SQL</Button>
                        <Button m={2}>SQL</Button>
                        <Button m={2}>Javascript</Button>
                        <Button m={2}>Javascript</Button>
                        <Button m={2}>Javascript</Button>
                        <Button m={2}>Javascript</Button>
                        <Button m={2}>Javascript</Button>
                    </AccordionPanel>
                    
                </AccordionItem>
            </Accordion>
        </div>
    )
}
