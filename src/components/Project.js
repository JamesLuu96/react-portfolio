import React from 'react'
import {Button, Box, Image, Flex, Text, useColorModeValue, Tooltip, Badge} from '@chakra-ui/react'
import ProjectModal from './ProjectModal'

import { LogoGithub, OpenOutline} from 'react-ionicons'


export default function Project({project}) {
    const color = useColorModeValue('black', 'white')
    const green = "linear(to-r, green.300, blue.500)"
    const {projectImage, projectName, github, liveWebsite, tags, isFeatured, isNew} = project

    return (
        <ProjectModal project={project}>
            <Flex position="absolute" right="0" margin="5px">
                {isFeatured ? <Badge colorScheme="purple" margin="5px">featured</Badge> : null}
                {isNew ? <Badge colorScheme="blue" margin="5px">new</Badge> : null}
            </Flex>
            <Flex padding="35px" flexDir="column" alignItems="center">
                <Image
                    boxSize="100px"
                    objectFit="cover"
                    src={projectImage}
                    alt={projectName}
                />
                <Flex>
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
            </Flex>
        </ProjectModal>
    )
}
