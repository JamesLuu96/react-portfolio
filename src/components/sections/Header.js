import React, {useState} from 'react'
import {Flex, Button, Box, useColorMode, IconButton, useColorModeValue} from '@chakra-ui/react'
import {SunIcon, MoonIcon} from "@chakra-ui/icons"
import {usePage} from "../../globalState"
import {Home} from "react-ionicons"

export default function Header() {
  const color = useColorModeValue('black', 'white')
  const { colorMode, toggleColorMode } = useColorMode()
  const {currentPage, setCurrentPage} = usePage()
  const categories = ['Home', 'Projects', 'About Me', 'Resume']
  return (
    <>
    <Box bgGradient="linear(to-r, green.300, blue.500)" w="100%" h="4px" mb="20px"/>
    <Flex 
      justify="center" 
      flex="row" 
      wrap="wrap" 
      position="sticky" 
      top={0} 
      css={{ backdropFilter: 'blur(20px)' }}>
      {categories.map((category, i)=>(
      <Button 
        key={i}
        m={3}
        bgGradient={ currentPage === category ? 'linear(to-r, green.300, blue.500)' : undefined } 
        color={currentPage === category ? "white": undefined}
        {...(currentPage === category ? {_hover: {bgGradient: 'linear(to-r, blue.400, green.200)'}} : {})}
        onClick={()=>setCurrentPage(category)}
      >
        {category !== "Home" ? category : <Home color={color}/>}
      </Button>
      ))}
    </Flex>
    <IconButton position="fixed" right={0} m={3} aria-label="Toggle Darkmode" icon={colorMode === "light" ? <SunIcon/> : <MoonIcon/>} onClick={toggleColorMode}/>
    </>
  )
}
