import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  components: {
    Text: {
      baseStyle: {
        fontFamily: "Nunito Sans"
      }
    },
    Heading: {
      baseStyle: {
        fontFamily: "Nunito Sans"
      }
    }
  },
  colors: {
    brand: {
      900: "#EF3E64"
    }
  }
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
