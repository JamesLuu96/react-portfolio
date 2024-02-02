// import React, {useState} from 'react'
// import {Accordion, Flex, Text, Button, AccordionItem, AccordionPanel, AccordionButton, AccordionIcon, Box, Tooltip} from '@chakra-ui/react'
import FilterButton from '../FilterButton'
import Project from '../Project'
import {InformationCircleOutline} from 'react-ionicons'
import React, { useState } from "react";
import {
  Text,
  Box,
  Flex,
  useColorModeValue,
  Image,
  HStack,
  Accordion,
  Button,
  Tooltip,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  AccordionIcon
} from "@chakra-ui/react";



// export default function Projects() {
//     const [filterProject, setFilterProject] = useState([])
//     const frameworks = [
//         "React.js",
//         "Next.js",
//         "Javascript",
//         "GraphQL",
//         "MongoDB",
//         "MySQL",
//         "Socket.io",
//         "jQuery",
//         "Nodejs",
//         "Express"
//     ]
//     const projects = [
//         {
//             projectName: "Portfolio",
//             projectDescription: "This very app you are on! A website to showcase my projects and connect with more people.",
//             projectThoughts: "This app was made completely from scratch making this site a very unique and personalized project!",
//             tags: ["React.js", "Next.js", "Javascript", "ChakraUI"],
//             isNew: true, 
//             isFeatured: true, 
//             projectImage: "https://i.imgur.com/GyUhtJX.png",
//             github: "https://github.com/JamesLuu96/react-portfolio",
//             liveWebsite: "https://www.jameskluu.dev/"
//         },
//         {
//             projectName: "ZingChat 2.0",
//             projectDescription: "This app is a real-time chat application where you can add friends and create rooms to socialize; made with React!",
//             projectThoughts: "This site is the successor of Zing-Chat, this time using React. It was difficult integrating socket.io with React but the payoff was definitely worth it!",
//             tags: ["React.js", "AntD", "Javascript", "Socket.io", "MongoDB", "GraphQL", "Apollo", "Express", "Nodejs"],
//             isFeatured: true,
//             github: "https://github.com/JamesLuu96/zing-chat",
//             liveWebsite: "http://www.zing-chat.ga/",
//             projectImage: "https://github.com/JamesLuu96/zing-chat/raw/master/app-screenshots/login.png"
//         },
//         {
//             projectName: "ZingChat", 
//             projectDescription: "This app is a real-time chat application to socialize with users in customizable rooms with unique effects!",
//             projectThoughts: "This site was my introduction with using Socket.io and that’s when I fell in love with it! I love how you can implement real time client interactions and can’t wait to use this feature more in the future!",
//             tags: ["Javascript", "Handlebars", "Socket.io", "MySQL", "Nodejs", "Express"], 
//             github: "https://github.com/JamesLuu96/zing", 
//             liveWebsite: "https://zing-chat.herokuapp.com/login", 
//             projectImage: "https://i.imgur.com/YOWSP8r.png"
//         },
//         {
//             projectName: "SimpleJack", 
//             projectDescription: "This app takes the game of blackjack and puts a twist on it where you fight off the Joker.",
//             projectThoughts: "My very first game I’ve created! I got very creative and carried away with adding a lot of features to make a simple game of blackjack have more in depth features!",
//             tags: ["Javascript", "CSS", "Bulma", "jQuery", "API", "Nodejs", "Express"], 
//             projectImage: "https://i.imgur.com/MdsSUQ1.png", 
//             github: "https://github.com/JamesLuu96/simple-jack", 
//             liveWebsite: "https://jamesluu96.github.io/simple-jack/"
//         },
//         {
//             projectName: "Tech Blog", 
//             projectDescription: "A tech forum where you can like and comment on your favorite posts.",
//             projectThoughts: "This website helped me learn how relational database can be helpful to create and connect users and posts.",
//             tags: ['Handlebars', 'MySQL', 'Sequelize', 'Javascript', 'BCrypt', 'Express'], 
//             projectImage: "https://i.imgur.com/5iB3Xfa.png", 
//             github: "https://github.com/JamesLuu96/tech-blog", 
//             liveWebsite: "https://tech-blog-james-luu.herokuapp.com/"
//         },
//         {
//             projectName: "WeatherDash", 
//             projectDescription: "A simple website to check current weather forecast.",
//             projectThoughts: "A simple frontend website to learn API calls.",
//             tags: ['Javascript'], 
//             projectImage: "https://i.imgur.com/opTtf6P.png", 
//             github: "https://github.com/JamesLuu96/weather-dashboard", 
//             liveWebsite: "https://jamesluu96.github.io/weather-dashboard/"
//         },
//     ]
    // function clearFilter(){
    //     setFilterProject([])
    // }
    // function filterProjects(){
    //     if(filterProject.length){
    //         return projects.filter(project=>{
    //             for(let i = 0; i < filterProject.length; i++){
    //                 if(!project.tags.includes(filterProject[i])){
    //                     return false
    //                 }
    //             }
    //             return true
    //         })
    //     }
    //     return projects
    // }
//     return (
        // <Flex
        //     alignItems="center"
        //     flexDir="column"
        //     flexWrap="wrap"
        // >
        //     <Flex>
        //         <Text fontSize="32px" mb="20px">
        //             My Projects
        //         </Text>
        //         <Tooltip hasArrow placement="top" label="Click on a project to see more information!">
        //             <Box height="fit-content">
        //                 <InformationCircleOutline color="#68D391" className="hoverInfo"/>
        //             </Box>
        //         </Tooltip>
        //     </Flex>

        //     <Accordion allowToggle w={"50%"} onChange={i=> i===-1?clearFilter():undefined}>
        //         <AccordionItem >
        //             <h2>
        //             <AccordionButton>
        //                 <Box flex="1" textAlign="center">
        //                 Advanced Filter
        //                 </Box>
        //                 <AccordionIcon />
        //             </AccordionButton>
        //             </h2>
        //             <AccordionPanel pb={4} display="flex" justifyContent="center" flexWrap="wrap">
        //                 {frameworks.map((framework, i)=>(
        //                     <FilterButton 
        //                         key={i} 
        //                         frameworkName={framework}
        //                         filterProject={filterProject}
        //                         setFilterProject={setFilterProject}
        //                     />
        //                 ))}
        //                 <Tooltip label="Clear Filter?"><Button m={2} borderRadius="50%" color="pink" onClick={clearFilter}>x</Button></Tooltip>
        //             </AccordionPanel>   
        //         </AccordionItem>
        //     </Accordion>
            
        //     <Flex
        //         flexDir="row"
        //         flexWrap="wrap"
        //         justifyContent="center"
        //         w="80vw"
        //     >
        //         {filterProjects().map((project, i)=>(
        //             <Project project={project} key={i}/>
        //         ))}
        //     </Flex>

        // </Flex>
//     )
// }


const Projects = () => {
  const arrowStyles = {
    cursor: "pointer",
    pos: "absolute",
    top: "50%",
    w: "auto",
    mt: "-22px",
    p: "16px",
    color: useColorModeValue("black", "white"),
    fontWeight: "bold",
    fontSize: "18px",
    transition: "0.6s ease",
    borderRadius: "0 3px 3px 0",
    userSelect: "none",
    _hover: {
      opacity: 0.8,
      bg: useColorModeValue("white","black"),
    },
  };
  const frameworks = [
            "React.js",
            "Next.js",
            "Javascript",
            "GraphQL",
            "MongoDB",
            "MySQL",
            "Socket.io",
            "jQuery",
            "Nodejs",
            "Express",
            "Gatsby",
            "API"
        ]

  
  const slides = [
            {
                projectName: "Wedding Website",
                projectDescription: "A personal website to showcase the events and organize RSVP's for our guests.",
                projectThoughts: "This application was a good way to learn how to implement Google's API to my custom form.",
                tags: ["React.js", "Gatsby", "Javascript", "API"],
                isNew: true, 
                isFeatured: true, 
                img: "https://i.imgur.com/hbBZhtq.png",
                github: "https://github.com/JamesLuu96/",
                liveWebsite: "https://linhandjames.com/"
            },
            {
                projectName: "Portfolio",
                projectDescription: "This very app you are on! A website to showcase my projects and connect with more people.",
                projectThoughts: "This app was made completely from scratch making this site a very unique and personalized project!",
                tags: ["React.js", "Next.js", "Javascript", "ChakraUI"],
                isFeatured: true, 
                img: "https://i.imgur.com/GyUhtJX.png",
                github: "https://github.com/JamesLuu96/react-portfolio",
                liveWebsite: "https://www.jameskluu.dev/"
            },
            {
                projectName: "ZingChat 2.0",
                projectDescription: "This app is a real-time chat application where you can add friends and create rooms to socialize; made with React!",
                projectThoughts: "This site is the successor of Zing-Chat, this time using React. It was difficult integrating socket.io with React but the payoff was definitely worth it!",
                tags: ["React.js", "AntD", "Javascript", "Socket.io", "MongoDB", "GraphQL", "Apollo", "Express", "Nodejs"],
                github: "https://github.com/JamesLuu96/zing-chat",
                liveWebsite: "http://www.zing-chat.ga/",
                img: "https://github.com/JamesLuu96/zing-chat/raw/master/app-screenshots/login.png"
            },
            {
                projectName: "ZingChat", 
                projectDescription: "This app is a real-time chat application to socialize with users in customizable rooms with unique effects!",
                projectThoughts: "This site was my introduction with using Socket.io and that’s when I fell in love with it! I love how you can implement real time client interactions and can’t wait to use this feature more in the future!",
                tags: ["Javascript", "Handlebars", "Socket.io", "MySQL", "Nodejs", "Express"], 
                github: "https://github.com/JamesLuu96/zing", 
                liveWebsite: "https://zing-chat.herokuapp.com/login", 
                img: "https://i.imgur.com/YOWSP8r.png"
            },
            {
                projectName: "SimpleJack", 
                projectDescription: "This app takes the game of blackjack and puts a twist on it where you fight off the Joker.",
                projectThoughts: "My very first game I’ve created! I got very creative and carried away with adding a lot of features to make a simple game of blackjack have more in depth features!",
                tags: ["Javascript", "CSS", "Bulma", "jQuery", "API", "Nodejs", "Express"], 
                img: "https://i.imgur.com/MdsSUQ1.png", 
                github: "https://github.com/JamesLuu96/simple-jack", 
                liveWebsite: "https://jamesluu96.github.io/simple-jack/"
            },
            {
                projectName: "Tech Blog", 
                projectDescription: "A tech forum where you can like and comment on your favorite posts.",
                projectThoughts: "This website helped me learn how relational database can be helpful to create and connect users and posts.",
                tags: ['Handlebars', 'MySQL', 'Sequelize', 'Javascript', 'BCrypt', 'Express'], 
                img: "https://i.imgur.com/5iB3Xfa.png", 
                github: "https://github.com/JamesLuu96/tech-blog", 
                liveWebsite: "https://tech-blog-james-luu.herokuapp.com/"
            },
            {
                projectName: "WeatherDash", 
                projectDescription: "A simple website to check current weather forecast.",
                projectThoughts: "A simple frontend website to learn API calls.",
                tags: ['Javascript'], 
                img: "https://i.imgur.com/opTtf6P.png", 
                github: "https://github.com/JamesLuu96/weather-dashboard", 
                liveWebsite: "https://jamesluu96.github.io/weather-dashboard/"
            },
        ]
        const [filterProject, setFilterProject] = useState([])
        function clearFilter(){
          setFilterProject([])
        }
        function filterProjects(){
            if(filterProject.length){
                return slides.filter(project=>{
                    for(let i = 0; i < filterProject.length; i++){
                        if(!project.tags.includes(filterProject[i])){
                            return false
                        }
                    }
                    return true
                })
            }
            return slides
        }
  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };
  const setSlide = (slide) => {
    setCurrentSlide(slide);
  };
  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };

  return (
    <>
    <Flex
      w="full"
      py={10}
      alignItems="center"
      justifyContent="center"
      height="75vh"
      display={{md:"none"}}
    >
      <Text fontSize="32px" mb="20px" textAlign="center">
        My Projects
      </Text>
      <Flex w="full" overflow="hidden" pos="relative">
        <Flex w="full" {...carouselStyle}>
          {slides.map((slide, sid) => (
            <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
              <Text
                color="white"
                fontSize="xs"
                // p="8px 12px"
                // pos="absolute"
                // top="0"
              >
                {sid + 1} / {slidesCount}
              </Text>
              <Project project={slide}/>
              {/* <Image src={slide.img} boxSize="full" backgroundSize="cover" /> */}
            </Box>
          ))}
        </Flex>
        <Text {...arrowStyles} left="0" onClick={prevSlide}>
          &#10094;
        </Text>
        <Text {...arrowStyles} right="0" onClick={nextSlide}>
          &#10095;
        </Text>
        <HStack justify="center" pos="absolute" bottom="8px" w="full">
          {Array.from({ length: slidesCount }).map((_, slide) => (
            <Box
              key={`dots-${slide}`}
              cursor="pointer"
              boxSize={["7px", , "15px"]}
              m="0 2px"
              bg={currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"}
              rounded="50%"
              display="inline-block"
              transition="background-color 0.6s ease"
              _hover={{ bg: "blackAlpha.800" }}
              onClick={() => setSlide(slide)}
            ></Box>
          ))}
        </HStack>
      </Flex>
    </Flex>

    <Flex
        alignItems="center"
        flexDir="column"
        flexWrap="wrap"
        display={{base:"none", md:"flex"}}
        m="15px"
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
    </>
  );
};
export default Projects;