import React from 'react'
import {Text, Tooltip, Image, Flex, Box} from '@chakra-ui/react'

export default function About() {
    return (
        <Box width="85%" margin="0 auto">
            <Text fontSize="32px" textAlign="center" mb="15px">
                James Khoa Luu
            </Text>
            <Flex alignItems="center" flexDir="column">
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


                <Text textAlign="center" lineHeight="3em" m="3" p="10px" width="75%" m="0 auto">
                    A highly qualified full-stack web developer with a background in networking offering experience in the development of advanced applications. Recently earning a certificate from the University of Texas at Austin for full-stack web development, with skills in React.js, JavaScript, and more. Known to deliver forward-thinking projects in an efficient manner with a strong focus on user experience and ease of interaction. Applied complex user to server interactions through web sockets to a recent social application project. While maintaining a single page application, this project allowed users to communicate in real time, customize personal lobbies, and add or remove friends. Flexible to my surroundings and can offer an innovative perspective on the evolving ways of modern technology. Eager to apply my skills to an accelerated and solution-oriented team to create impactful applications.
                </Text>
            </Flex>
        </Box>
    )
}
