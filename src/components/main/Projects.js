import React, {useState} from 'react'
import {Accordion, Flex, Text, Button, AccordionItem, AccordionPanel, AccordionButton, AccordionIcon, Box, Tooltip} from '@chakra-ui/react'
import FilterButton from '../FilterButton'
import Project from '../Project'
import {InformationCircleOutline} from 'react-ionicons'


export default function Projects() {
    const [filterProject, setFilterProject] = useState([])
    const frameworks = [
        "React.js",
        "Javascript",
        "GraphQL",
        "MongoDB",
        "MySQL",
        "Socket.io",
        "jQuery",
        "Nodejs",
        "Express"
    ]
    const projects = [
        {projectName: "My Portfolio", tags: ["React.js", "Next.js", "Javascript", "ChakraUI"], isNew: true, isFeatured: true},
        {projectName: "ZingChat 2.0", tags: ["React.js", "AntD", "Javascript", "Socket.io", "MongoDB", "GraphQL", "Apollo", "Express", "Nodejs"], isFeatured: true, github: "https://github.com/JamesLuu96/zing-chat", liveWebsite: "https://zing2.herokuapp.com/", projectImage: "https://github.com/JamesLuu96/zing-chat/raw/master/app-screenshots/login.png"},
        {projectName: "ZingChat", tags: ["Javascript", "Handlebars", "Socket.io", "MySQL", "Nodejs", "Express"], github: "https://github.com/JamesLuu96/zing", liveWebsite: "https://zing-chat.herokuapp.com/login", projectImage: "https://user-images.githubusercontent.com/73629983/114060350-e9af7200-985a-11eb-99b2-0af3d081f204.png"},
        {projectName: "SimpleJack", tags: ["Javascript", "CSS", "Bulma", "jQuery", "API", "Nodejs", "Express"], projectImage: "https://user-images.githubusercontent.com/73920328/106347184-39355880-6282-11eb-8b5f-5e877a235643.png", github: "https://github.com/JamesLuu96/simple-jack", liveWebsite: "https://jamesluu96.github.io/simple-jack/"}
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
            <Flex>
                <Text fontSize="32px" mb="20px">
                    My Projects
                </Text>
                <Tooltip hasArrow placement="top" label="Click on a project to see more information!">
                    <Box height="fit-content">
                        <InformationCircleOutline color="#68D391" className="hoverInfo"/>
                    </Box>
                </Tooltip>
            </Flex>

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
                    <Project project={project} key={i}/>
                ))}
            </Flex>

        </Flex>
    )
}
