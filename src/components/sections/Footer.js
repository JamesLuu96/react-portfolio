import React from 'react'
import {Flex, Text, useColorModeValue} from '@chakra-ui/react'
import { LogoGithub, LogoLinkedin} from 'react-ionicons'



export default function Footer() {
    const color = useColorModeValue('black', 'white')
    return (
        <div style={{padding: "10px"}}>
            <Text>Stay connected to see what I'm up to!</Text>
            <Flex justify="center">
                <LogoGithub color={color}/>
                <LogoLinkedin color={color}/>
            </Flex>
        </div>
    )
}
