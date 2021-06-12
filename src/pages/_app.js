import { ChakraProvider, CSSReset } from "@chakra-ui/react"
import theme from "../theme"
import PageProvider from "../globalState"

function MyApp({ Component, pageProps }) {
    return(
      <PageProvider>
      <ChakraProvider theme={theme}>
        <CSSReset/>
        <Component {...pageProps} />
      </ChakraProvider>
      </PageProvider>
    ) 
}

export default MyApp
