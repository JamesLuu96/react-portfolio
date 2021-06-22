// theme.js

// 1. import `extendTheme` function
import { extendTheme, theme as chakraTheme } from "@chakra-ui/react"

// 2. Add your color mode config
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

const fonts = {
  ...chakraTheme.fonts,
  body: 'Quicksand, Arial, sans-serif',
  heading: 'Quicksand, Arial, sans-serif'

}

// 3. extend the theme
const theme = extendTheme({ config, fonts })

export default theme