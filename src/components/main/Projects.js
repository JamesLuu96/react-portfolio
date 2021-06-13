import React, {useState} from 'react'
import {Accordion, Flex, Button, AccordionItem, AccordionPanel, AccordionButton, AccordionIcon, Box, Tooltip} from '@chakra-ui/react'
import FilterButton from '../FilterButton'

export default function Projects() {
    const [filterProject, setFilterProject] = useState([])
    const frameworks = [
        "React.js",
        "Javascript",
        "GraphQL",
        "MongoDB",
        "MySQL"
    ]
    function clearFilter(){
        setFilterProject([])
    }
    return (
        <Flex
            alignContent="center"
            flexDir="column"
            flexWrap="wrap"
        >
            
            <Accordion allowToggle w={"50%"} onChange={i=> i===-1?clearFilter():undefined}>
                <AccordionItem >
                    <h2>
                    <AccordionButton>
                        <Box flex="1" textAlign="center">
                        Advanced Filter
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} display="flex" justifyContent="center" flexWrap="wrap">
                        {frameworks.map((framework, i)=>(
                            <FilterButton 
                                key={i} 
                                frameworkName={framework}
                                filterProject={filterProject}
                                setFilterProject={setFilterProject}
                            />
                        ))}
                        <Tooltip label="Clear Filter?"><Button m={2} borderRadius="50%" color="pink" onClick={clearFilter}>x</Button></Tooltip>
                    </AccordionPanel>   
                </AccordionItem>
            </Accordion>
            <h1>
                Projects
            </h1>
            <Flex>

            </Flex>

        </Flex>
    )
}
