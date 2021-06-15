import React from 'react'
import {Flex, Text, Box, useColorModeValue} from '@chakra-ui/react'
import { LogoGithub, LogoLinkedin} from 'react-ionicons'



export default function Footer() {
    const color = useColorModeValue('black', 'white')
    const green = "linear(to-r, green.300, blue.500)"

    return (
        <Box 
            bottom="0"
            position="absolute"
            width="100%"
            height="1.5rem"
            textAlign="center"
            borderTop="1px solid grey"
        >
            <Text mt="20px" mb="10px">Stay connected to see what I'm up to!</Text>
            <Flex justify="center">
                <LogoGithub color={color} className="hoverColor"/>
                <LogoLinkedin color={color} className="hoverLinkedin"/>
            </Flex>
        <Box bgGradient={green} w="100%" h="4px" mt="20px"/>

        </Box>
    )
}
