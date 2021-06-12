import React from 'react'
import {Flex} from '@chakra-ui/react'
import Header from '../sections/Header'
import Footer from '../sections/Footer'

export default function Landing(props) {
    return (
        <Flex
        direction="column"
        maxW={{ xl: "1200px" }}
        m="0 auto"
        {...props}
        >
            <Header/>
            {props.children}
            <div style={{height: "800px"}}></div>
            <Footer/>
        </Flex>
    )
}
