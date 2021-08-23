import React from 'react'
import {Button, Box, Image, Flex, Text, useColorModeValue, Tooltip, Badge, chakra, useColorMode} from '@chakra-ui/react'
import ProjectModal from './ProjectModal'

import { LogoGithub, OpenOutline} from 'react-ionicons'


// export default function Project({project}) {
    // const color = useColorModeValue('black', 'white')
    // const green = "linear(to-r, green.300, blue.500)"
    // const {img, projectName, github, liveWebsite, tags, isFeatured, isNew, projectDescription} = project

//     return (
//         <ProjectModal project={project}>
//             <Flex position="absolute" right="0" margin="5px">
//                 {isFeatured ? <Badge colorScheme="purple" margin="5px">featured</Badge> : null}
//                 {isNew ? <Badge colorScheme="blue" margin="5px">new</Badge> : null}
//             </Flex>
//             <Flex padding="35px" flexDir="column" alignItems="center">
//                 <Image
//                     boxSize="100px"
//                     objectFit="cover"
//                     src={img}
//                     alt={projectName}
//                 />
//                 <Flex justifyContent="center" alignItems="center">
//                     <Text margin="5px">{projectName}:</Text>
                   
//                     <Tooltip label="View Github">
//                         <Box>
//                             <LogoGithub color={color} className="hoverColor" style={{margin: "5px"}} onClick={(e)=>{e.stopPropagation();window.open(github, "_blank")}}/>
//                         </Box>
//                     </Tooltip>
                   
//                     <Tooltip label="Open Live Website">
//                         <Box>
//                             <OpenOutline color={color} className="hoverColor" style={{margin: "5px"}} onClick={(e)=>{e.stopPropagation();window.open(liveWebsite, "_blank")}}/>
//                         </Box>
//                     </Tooltip>

//                 </Flex>
//                 <Text color="#68D391">Description: </Text>
//                 <Text height="100px">{projectDescription}</Text>
//             </Flex>
//         </ProjectModal>
//     )
// }

export default function Project({project}){
    const color = useColorModeValue('black', 'white')
    const green = "linear(to-r, green.300, blue.500)"
    const {img, projectName, github, liveWebsite, tags, isFeatured, isNew, projectDescription} = project
    return (
      <>
      <Flex
        // bg={useColorModeValue("#F9FAFB", "gray.600")}
        p={50}
        w="full"
        alignItems="center"
        justifyContent="center"
        display={{md:"none"}}
      >
        <Box
          maxW="xs"
          mx="auto"
          bg={useColorModeValue('gray.100', 'gray.900')}
          shadow="lg"
          rounded="lg"
        >
          <Box px={4} py={2}>
            <chakra.h1
              color={useColorModeValue("gray.800", "white")}
              fontWeight="bold"
              fontSize="3xl"
            >
              {projectName}
            </chakra.h1>
            <chakra.p
              mt={1}
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              {projectDescription} 
            </chakra.p>
          </Box>
  
          <Image
            h={48}
            w="full"
            fit="cover"
            mt={2}
            src={img}
            alt={projectName}
          />
  
          <Flex
            alignItems="center"
            justifyContent="space-between"
            px={4}
            py={2}
            bg={useColorModeValue('gray.100', 'gray.900')}
            roundedBottom="lg"
          >
            <chakra.h1 color={useColorModeValue("black", "white")} fontWeight="bold" fontSize="lg">
            <LogoGithub color={color} className="hoverColor" style={{margin: "5px"}} onClick={(e)=>{e.stopPropagation();window.open(github, "_blank")}}/>
            </chakra.h1>
            <chakra.button
              px={2}
              py={1}
              bg="white"
              fontSize="xs"
              color="gray.900"
              fontWeight="bold"
              rounded="lg"
              textTransform="uppercase"
              _hover={{
                bg: "gray.200",
              }}
              _focus={{
                bg: "gray.400",
              }}
              onClick={(e)=>{e.stopPropagation();window.open(liveWebsite, "_blank")}}
            >
              Visit Website
            </chakra.button>
          </Flex>
        </Box>
      </Flex>

      <Box display={{base:"none", md:"block"}}>
      <ProjectModal project={project} >
             <Flex position="absolute" right="0" margin="5px" >
                 {isFeatured ? <Badge colorScheme="purple" margin="5px">featured</Badge> : null}
                 {isNew ? <Badge colorScheme="blue" margin="5px">new</Badge> : null}
             </Flex>
             <Flex padding="35px" flexDir="column" alignItems="center">
                 <Image
                    boxSize="100px"
                    objectFit="cover"
                    src={img}
                    alt={projectName}
                />
                <Flex justifyContent="center" alignItems="center">
                    <Text margin="5px">{projectName}:</Text>
                   
                    <Tooltip label="View Github">
                        <Box>
                            <LogoGithub color={color} className="hoverColor" style={{margin: "5px"}} onClick={(e)=>{e.stopPropagation();window.open(github, "_blank")}}/>
                        </Box>
                    </Tooltip>
                   
                    <Tooltip label="Open Live Website">
                        <Box>
                            <OpenOutline color={color} className="hoverColor" style={{margin: "5px"}} onClick={(e)=>{e.stopPropagation();window.open(liveWebsite, "_blank")}}/>
                        </Box>
                    </Tooltip>

                </Flex>
                <Text color="#68D391">Description: </Text>
                <Text height="100px">{projectDescription}</Text>
            </Flex>
        </ProjectModal>
        </Box>
      </>
      
    );
};
  