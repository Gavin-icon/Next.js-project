import {CSSReset, ChakraProvider} from '@chakra-ui/core'
// import theme from '../chakra'
function MyApp({ Component, pageProps }) {
  return <ChakraProvider>
    <CSSReset />
    <Component {...pageProps} />
  </ChakraProvider>
}

export default MyApp
