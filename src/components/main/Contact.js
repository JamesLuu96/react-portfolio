import React, {useState} from 'react'
import {Box, Text, Button, Flex, Input, FormControl, FormLabel, Textarea, useColorModeValue} from '@chakra-ui/react'
import { Send } from 'react-ionicons'
const initialFormContent = {
    name: '',
    subject: '',
    message: '',
    email: ''
}

export default function Contact() {
    const [formContent, setFormContent] = useState(initialFormContent)
    const color = useColorModeValue('black', 'white')
    const green = "linear(to-r, green.300, blue.500)"
    function sendContact(e){
        e.preventDefault()
        console.table(formContent)
    }
    return (
        <Box width="60%" margin="0 auto">
            <Text fontSize="32px">Contact Me</Text>
            <form onSubmit={sendContact}>
                <Flex w="100%">
                    <FormControl m="10px 10px 10px 0" isRequired>
                        <Input placeholder="Name" value={formContent.name} onChange={e=>setFormContent(old=>({...old, name: e.target.value}))}></Input>
                    </FormControl>
                    <FormControl m="10px 0 10px 0" isRequired>
                        <Input type="email" placeholder="Email address" value={formContent.email} onChange={e=>setFormContent(old=>({...old, email: e.target.value}))}></Input>
                    </FormControl>
                </Flex>
                <FormControl mb="10px" isRequired>
                    <Input placeholder="Subject" value={formContent.subject} onChange={e=>setFormContent(old=>({...old, subject: e.target.value}))}></Input>
                </FormControl>
                <FormControl mb="10px" isRequired>
                    <Textarea placeholder="Message" value={formContent.message} onChange={e=>setFormContent(old=>({...old, message: e.target.value}))}></Textarea>
                </FormControl>
                <Button type="submit" mb="20px" bgGradient={green} _hover={{bgGradient: 'linear(to-r, blue.400, green.200)'}}><Send color={color}/></Button>
            </form>
        </Box>
    )
}
