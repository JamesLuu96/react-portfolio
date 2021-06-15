import React, {useState} from 'react'
import {Accordion, Flex, Text, Button, AccordionItem, AccordionPanel, AccordionButton, AccordionIcon, Box, Tooltip} from '@chakra-ui/react'
import FilterButton from '../FilterButton'
import Project from '../Project'

export default function Projects() {
    const [filterProject, setFilterProject] = useState([])
    const frameworks = [
        "React.js",
        "Javascript",
        "GraphQL",
        "MongoDB",
        "MySQL"
    ]
    const projects = [
        {link: "https://bit.ly/sage-adebayo", name: "Placeholder Project", tags: ["React.js", "Javascript"]},
        {link: "https://bit.ly/sage-adebayo", name: "Placeholder Project", tags: ["GraphQL"]},
        {link: "https://bit.ly/sage-adebayo", name: "Placeholder Project", tags: ["Javascript"]},
        {link: "https://bit.ly/sage-adebayo", name: "Placeholder Project", tags: ["MongoDB"]}
    ]
    function clearFilter(){
        setFilterProject([])
    }
    function filterProjects(){
        if(filterProject.length){
            return projects.filter(project=>{
                for(let i = 0; i < filterProject.length; i++){
                    if(!project.tags.includes(filterProject[i])){
                        return false
                    }
                }
                return true
            })
        }
        return projects
    }
    return (
        <Flex
            alignItems="center"
            flexDir="column"
            flexWrap="wrap"
        >
            <Text fontSize="32px" mb="20px">
                My Projects
            </Text>

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
            
            <Flex
                flexDir="row"
                flexWrap="wrap"
                justifyContent="center"
                w="80vw"
            >
                {filterProjects().map((project, i)=>(
                    <Project link={project.link} name={project.name} key={i}/>
                ))}
            </Flex>

        </Flex>
    )
}
