import React from 'react'
import {Flex, Text, Box, useColorModeValue, Tooltip} from '@chakra-ui/react'
import { LogoGithub, LogoLinkedin} from 'react-ionicons'



export default function Footer({footerRef}) {
    const color = useColorModeValue('black', 'white')
    const green = "linear(to-r, green.300, blue.500)"

    return (
        <Box 
            bottom="0"
            position="absolute"
            width="100%"
            // height="1.5rem"
            textAlign="center"
            borderTop="1px solid grey"
            ref={footerRef}
        >
            <Text mt="20px" mb="10px">Stay connected to see what I'm up to!</Text>
            <Flex justify="center">
                <Tooltip label="Github">
                    <Box>
                        <LogoGithub color={color} className="hoverColor" onClick={()=>window.open("https://github.com/JamesLuu96", "_blank")}/>
                    </Box>                  
                </Tooltip>
                <Tooltip label="LinkedIn">
                    <Box>
                        <LogoLinkedin color={color} className="hoverLinkedin" onClick={()=>window.open("https://www.linkedin.com/in/james-luu-7b62391ab/", "_blank")}/>
                    </Box>
                </Tooltip>
            </Flex>
            <Box bgGradient={green} w="100%" h="4px" mt="20px"/>

        </Box>
    )
}
