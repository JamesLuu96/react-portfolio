import React, {useState, useEffect, useRef} from 'react'
import {Image, Box, Text, Tooltip, Flex, useColorModeValue} from '@chakra-ui/react'
import {useLogoColor} from "../../globalState"
import BIRDS from 'vanta/dist/vanta.birds.min'
// import * as THREE from 'three'

export default function Home() {
    const {logoColor, handleClick} = useLogoColor()
    const [vantaEffect, setVantaEffect] = useState(0)
    const myRef = useRef(null)
    const color = useColorModeValue('black', 'grey')
    const colorTitle = useColorModeValue('rgba(223, 229, 240, 0.80)','rgba(77, 73, 92, 0.80)')
    useEffect(() => {
      if (!vantaEffect) {
        setVantaEffect(BIRDS({
            el: myRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: 0x6680a4,
            color1: 0x3b7582,
            color2: 0x4aff,
            birdSize: 1.50,
            wingSpan: 25.00,
            speedLimit: 3.00,
            separation: 90.00,
            alignment: 0.00,
            cohesion: 100.00,
            quantity: 4.00,
            backgroundAlpha: 0.00
        }))
      }
      return () => {
        if (vantaEffect) vantaEffect.destroy()
      }
    }, [vantaEffect])
    return (
        <Box ref={myRef} height="65vh" borderTop={`1px solid ${color}`}>
            <Box position="fixed" top="45%" left="50%" transform="translate(-50%, -50%)" width="500px" textAlign="center">
                <Flex fontSize="82px" background={colorTitle} borderRadius="15px" justifyContent="center" className="flipParent" onClick={()=>handleClick()}>
                    <Text>JAMES</Text>
                    <Text color={logoColor} className="flip">K</Text>
                    <Text>LUU</Text>
                </Flex>
                <Text fontWeight="bold">Full-Stack Web Developer</Text>
            </Box>
        </Box>
    )
}
