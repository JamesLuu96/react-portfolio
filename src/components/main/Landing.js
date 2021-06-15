import React from 'react'
import {Flex} from '@chakra-ui/react'
import Header from '../sections/Header'
import Footer from '../sections/Footer'

export default function Landing(props) {
    return (
        <div
        // direction="column"
        // maxW={{ xl: "1200px" }}
        // m="0 auto"
        // {...props}
            style={{position: "relative", minHeight: "100vh", paddingBottom: "2.5rem"}}
        >
            <Header/>
            {props.children}
            <Footer/>
        </div>
    )
}
