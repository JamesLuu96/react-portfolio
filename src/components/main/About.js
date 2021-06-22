import React from 'react'
import {Text, Tooltip, Image, Flex, Box, Button, Badge} from '@chakra-ui/react'
import { DownloadOutline } from 'react-ionicons'

export default function About() {
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
        "Express"
    ]
    return (
        <>
        <Flex justifyContent="center" mb="35px">
                <Box flexBasis="40%">
                    <Image
                        borderRadius="15%"
                        width="100%"
                        src="https://i.imgur.com/19HrFcu.jpg"
                        alt="James Luu"
                        mt="13px"
                    />
                </Box>
                
                <Box ml="25px" flexBasis="40%">
                    <Text fontSize="32px" mb="15px">
                        James Khoa Luu
                    </Text>
                    <Text mb="10px">
                        A full-stack web developer with a background in networking offering experience in the development of advanced applications. Recently earning a certificate from the University of Texas at Austin for full-stack web development, with newly toned skills in React.js, JavaScript, and more. Known to deliver forward-thinking projects in an efficient manner with a strong focus on user experience and ease of interaction. Flexible to my surroundings and can offer an innovative perspective on the evolving ways of modern technology. Eager to apply my skills to an accelerated and solution-oriented team to create impactful applications.
                    </Text>
                    <a href="./JamesKhoaLuu_Resume.pdf" download>
                        <Button>
                            Download Resume
                            <DownloadOutline color="lightblue" style={{margin: "0 0 0 3px"}}/>
                        </Button>
                    </a>
                </Box>
        </Flex>
        <Text fontSize="24px" textAlign="center" mb="15px">My Proficiencies</Text>
        <Flex justifyContent="center" wrap="wrap" width="65%" m="15px auto">
            {frameworks.map(framework=>(
                <Badge key={framework} m="2" p='2' fontSize="18px">{framework}</Badge>
            ))}
        </Flex>
        </>
    )
}
