import React, {useState} from 'react'
import {Flex, Button, Box, useColorMode, IconButton, useColorModeValue, Tooltip, Text} from '@chakra-ui/react'
import {SunIcon, MoonIcon} from "@chakra-ui/icons"
import {usePage} from "../../globalState"
import {Home} from "react-ionicons"
import {useLogoColor} from "../../globalState"


export default function Header() {
  const {logoColor} = useLogoColor()

  const color = useColorModeValue('black', 'white')
  const { colorMode, toggleColorMode } = useColorMode()
  const {currentPage, setCurrentPage} = usePage()
  const categories = ['Home', 'Projects', 'About Me', 'Contact']
  const green = "linear(to-r, green.300, blue.500)"
  return (
    <>
    <Tooltip label={colorMode === "light" ? "Toggle Darkmode?" : "Toggle Lightmode?"}  >
      <IconButton position="fixed" right={0} m={3} zIndex={11} aria-label="Toggle Darkmode" icon={colorMode === "light" ? <SunIcon/> : <MoonIcon/>} onClick={toggleColorMode}/>
    </Tooltip>
    <Box bgGradient={green} w="100%" h="4px" mb="20px"/>
    <Flex 
      justify="center" 
      flex="row" 
      wrap="wrap" 
      position="sticky" 
      top={0}
      mb={10} 
      css={{ backdropFilter: 'blur(20px)' }}
      zIndex="10"  
    >
      <Flex fontSize="24px" position="absolute" left="0" m="3" ml="20px" fontWeight="bold" className="flipParent" onClick={()=>setCurrentPage("Home")}>
                <Text>J</Text>
                <Text className="flip" color={logoColor}>K</Text>
                <Text>L</Text>
      </Flex>
      {categories.map((category, i)=>(
      <Button 
        key={i}
        m={3}
        bgGradient={ currentPage === category ? green : undefined } 
        color={currentPage === category ? "white": undefined}
        {...(currentPage === category ? {_hover: {bgGradient: 'linear(to-r, blue.400, green.200)'}} : {})}
        onClick={()=>setCurrentPage(category)}
      >
        {category !== "Home" ? category : <Home color={color}/>}
      </Button>
      ))}
    </Flex>
    </>
  )
}
