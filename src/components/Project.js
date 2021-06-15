import React from 'react'
import {Button, Box, Image, Flex, Text, useColorModeValue, Tooltip} from '@chakra-ui/react'
import { LogoGithub, OpenOutline} from 'react-ionicons'


export default function Project({link, name}) {
    const color = useColorModeValue('black', 'white')
    const green = "linear(to-r, green.300, blue.500)"

    return (
        <Box 
            textAlign="center"
            border="3px solid grey"
            w="300px"
            h="300px"
            margin="15px"
            className="hoverBorder"
        >
            <Flex padding="30px" flexDir="column" alignItems="center">
                <Image
                    boxSize="100px"
                    objectFit="cover"
                    src={link}
                    alt={name}
                />
                <Flex>
                    <Text style={{margin: "5px"}}>{name}:</Text>
                    <Tooltip label="View Github">
                        <Box>
                            <LogoGithub color={color} className="hoverColor" style={{margin: "5px"}}/>
                        </Box>
                    </Tooltip>
                    <Tooltip label="Open Live Website">
                        <Box>
                            <OpenOutline color={color} className="hoverColor" style={{margin: "5px"}}/>
                        </Box>
                    </Tooltip>
                </Flex>
            </Flex>
        </Box>
    )
}
