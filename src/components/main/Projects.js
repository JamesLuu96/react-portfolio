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
        {
            projectName: "My Portfolio",
            projectDescription: "This very app you are currently on! This app is made to showcase my projects and leave an everlasting mark on those who view it!",
            projectThoughts: "This app was made completely from scratch making this site a very unique and personalized project!",
            tags: ["React.js", "Next.js", "Javascript", "ChakraUI"],
            isNew: true, 
            isFeatured: true, 
            projectImage: "https://i.imgur.com/soNxKJ3.png",
            github: "https://github.com/JamesLuu96/react-portfolio",
            liveWebsite: "https://www.jameskluu.dev/"
        },
        {
            projectName: "ZingChat 2.0",
            projectDescription: "This app is a real-time chat application where you can add friends and create rooms to socialize; recreated with React!",
            projectThoughts: "This site is the successor of Zing-Chat, this time using React. It was very difficult integrating socket.io with React but the payoff was definitely worth it!",
            tags: ["React.js", "AntD", "Javascript", "Socket.io", "MongoDB", "GraphQL", "Apollo", "Express", "Nodejs"],
            isFeatured: true,
            github: "https://github.com/JamesLuu96/zing-chat",
            liveWebsite: "http://www.zing-chat.ga/",
            projectImage: "https://github.com/JamesLuu96/zing-chat/raw/master/app-screenshots/login.png"
        },
        {
            projectName: "ZingChat", 
            projectDescription: "This app is a real-time chat application to socialize with users in customized rooms with different cool effects!",
            projectThoughts: "This site was my introduction with using Socket.io and that’s when I fell in love with it! I love how you can implement real time client interactions and can’t wait to use this feature more in the future!",
            tags: ["Javascript", "Handlebars", "Socket.io", "MySQL", "Nodejs", "Express"], 
            github: "https://github.com/JamesLuu96/zing", 
            liveWebsite: "https://zing-chat.herokuapp.com/login", 
            projectImage: "https://i.imgur.com/YOWSP8r.png"
        },
        {
            projectName: "SimpleJack", 
            projectDescription: "This app takes the simple game of blackjack and puts it on an entire new level where you take on the role of Gambit and fight off the Joker!",
            projectThoughts: "My very first game I’ve created! I got very creative and carried away with adding a lot of features to make a simple game of blackjack have more in depth features!",
            tags: ["Javascript", "CSS", "Bulma", "jQuery", "API", "Nodejs", "Express"], 
            projectImage: "https://i.imgur.com/MdsSUQ1.png", 
            github: "https://github.com/JamesLuu96/simple-jack", 
            liveWebsite: "https://jamesluu96.github.io/simple-jack/"
        }
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
