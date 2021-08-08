import React, {useState} from 'react'
// import {Flex, Button, Box, useColorMode, IconButton, useColorModeValue, Tooltip, Text} from '@chakra-ui/react'
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Text,
  Tooltip
} from '@chakra-ui/react';
import {SunIcon, MoonIcon} from "@chakra-ui/icons"
import {usePage} from "../../globalState"
import {Home} from "react-ionicons"
import {useLogoColor} from "../../globalState"
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = ['Dashboard', 'Projects', 'Team'];



export default function Header() {
  const {logoColor} = useLogoColor()

  const color = useColorModeValue('black', 'white')
  const { colorMode, toggleColorMode } = useColorMode()
  const {currentPage, setCurrentPage} = usePage()
  const categories = ['Projects', 'About Me', 'Contact']
  const green = "linear(to-r, green.300, blue.500)"
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const NavLink = ({ children }) => (
    <Link
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      bgGradient={ currentPage === children ? green : undefined } 
      color={currentPage === children ? "white": undefined}
      {...(currentPage === children ? {_hover: {bgGradient: 'linear(to-r, blue.400, green.200)'}} : {})}
      onClick={(e)=>{setCurrentPage(children);onClose(e)}}
      fontWeight="bold"
      >
      {children}
    </Link>
  );

  return (
    <>
    {/* <Tooltip label={colorMode === "light" ? "Toggle Darkmode?" : "Toggle Lightmode?"}  >
      <IconButton borderRadius="var(--chakra-radii-md)" position="fixed" right={0} m={3} zIndex={11} aria-label="Toggle Darkmode" icon={colorMode === "light" ? <SunIcon/> : <MoonIcon/>} onClick={toggleColorMode}/>
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
    </Flex> */}
    {/* <> */}
      <Box bgGradient={green} w="100%" h="4px"/>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} position="sticky" top={0} mb={10} zIndex="10" >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Flex fontSize="24px" fontWeight="bold" className="flipParent" onClick={(e)=>{setCurrentPage("Home");onClose(e)}}>
                <Text>J</Text>
                <Text className="flip" color={logoColor}>K</Text>
                <Text>L</Text>
            </Flex>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {categories.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <IconButton icon={colorMode === "light" ? <SunIcon/> : <MoonIcon/>} onClick={toggleColorMode}/>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {categories.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
    // </>
  )
}
