import React, {useRef, useState} from 'react'
import Header from '../sections/Header'
import Footer from '../sections/Footer'
import { Flex } from '@chakra-ui/react'
export default function Landing(props) {
    const footerRef = useRef()
    return (
        <div
            style={{position: "relative", minHeight: "100vh", paddingBottom: footerRef.current ? `${footerRef.current.clientHeight}px`: "100px"}}
        >
            <Header/>
            {props.children}
            <Footer footerRef={footerRef}/>
        </div>
    )
}
