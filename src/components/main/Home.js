import React, {useState} from 'react'
import {Image, Box, Text, Tooltip, Flex} from '@chakra-ui/react'
import {useLogoColor} from "../../globalState"

export default function Home() {
    const {logoColor, handleClick} = useLogoColor()
    return (
        <Box margin="0 auto" width="500px" textAlign="center">
            <Tooltip hasArrow placement="top-end" label="Thanks for stopping by!">
                <Image
                    borderRadius="full"
                    // boxSize="350px"
                    maxWidth="350px"
                    src="https://i.imgur.com/19HrFcu.jpg"
                    alt="James Luu"
                    m="0 auto"
                />
            </Tooltip>
            <Flex fontSize="82px" className="flipParent" onClick={()=>handleClick()}>
                <Text>JAMES</Text>
                <Text color={logoColor} className="flip">K</Text>
                <Text>LUU</Text>
            </Flex>
            
        </Box>
    )
}
