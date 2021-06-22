import React, {useState} from 'react'
import {Box, Text, Button, Flex, Input, FormControl, Textarea, useColorModeValue} from '@chakra-ui/react'
import { Send, CallOutline, MailOutline, LocationOutline } from 'react-ionicons'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

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
    const colorBorder = useColorModeValue('var(--chakra-colors-gray-200)', 'var(--chakra-colors-whiteAlpha-300)')
    function sendContact(e){
        e.preventDefault()
        emailjs.send(process.env.SERVICE_ID, process.env.TEMPLATE_ID, formContent, process.env.USER_ID)
        .then(() => {
            toast.success('E-mail has successfully been sent!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            })
            setFormContent(initialFormContent)
        }, () => {
            console.log('E-mail has not been sent!: ');
            toast.error('Something went wrong!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
        });
    }

    return (
        <Box width="60%" margin="0 auto">
            <Text fontSize="32px" textAlign="center" mb="15px">Let's connect!</Text>
            <Flex justifyContent="space-between" mb="15px">
                <Flex background={colorBorder} borderRadius="var(--chakra-radii-md)" p="3" alignItems="center">
                    <CallOutline color="green"/>
                    <Box m="2">
                        <Text fontWeight="bold">
                            Give me a call:
                        </Text>
                        <Text>
                            (737) 228-3859
                        </Text>
                    </Box>
                </Flex>
                <Flex background={colorBorder} borderRadius="var(--chakra-radii-md)" p="3" alignItems="center" m="0 10px">
                    <MailOutline color="lightblue"/>
                    <Box m="2">
                        <Text fontWeight="bold">
                            Send me an e-mail:
                        </Text>
                        <Text>
                            James.Luu96@gmail.com
                        </Text>
                    </Box>
                </Flex>
                <Flex background={colorBorder} borderRadius="var(--chakra-radii-md)" p="3" alignItems="center">
                    <LocationOutline color="red"/>
                    <Box m="2">
                        <Text fontWeight="bold">
                            Currently located at:
                        </Text>
                        <Text>
                            Austin, TX
                        </Text>
                    </Box>
                </Flex>
            </Flex>
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
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
            />
        </Box>
    )
}
