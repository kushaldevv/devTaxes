import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from "@chakra-ui/theme-tools"
import '../styles/styles.css'

function MyApp({ Component, pageProps }) {
  const fonts = {
    body: `.SF NS,monospace,Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
    heading: `.SF NS,monospace,Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`
  }

  const fontSizes = {
    sm: '14px',
    lg: '20px',
    xl: '30px',
    '2xl': '48px'
  }

  const fontWeight = {
    normal: 300,
    medium: 500,
    bold: 700
  }

  const breakpoints = createBreakpoints({
    sm: '40em',
    md: '50em',
    lg: '65em',
    xl: '100em',
  })

  const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
  }

  const theme = extendTheme({
    fonts,
    fontSizes,
    fontWeight,
    breakpoints,
    config
  })
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
