/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import { Box, ChakraProvider, defineStyle, defineStyleConfig, extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'


const theme = extendTheme({
  fonts: {
    heading: `'Neue Montreal'`,
    body: `'Neue Montreal'`,
  },
  config: {
    initialColorMode: 'dark',
    // useSystemColorMode: false,
  },
  colors: {
    // backgroundColor: '#0C0C0C'
    // brand: {
    //   100: "#f7fafc",
    //   // ...
    //   900: "#1a202c",
    // },
  },
  styles: {
    global: props => ({
      body: {
        bg: mode('white', '#0c0c0c')(props)
      }
    })
  },
  components: {
    Button:  defineStyleConfig({
      sizes: {
        sm: defineStyle({
          fontSize: '50px',
          fontWeight: 'normal',
          borderRadius: '16px',
          height: '74px'
        }),
        md: defineStyle({
          fontSize: '50px',
          fontWeight: 'normal',
          borderRadius: '16px',
          height: '164px'
        }),
        lg: defineStyle({
          fontSize: '76px',
          fontWeight: 'normal',
          borderRadius: '16px',
          height: '164px'
        })


      },
      variants: {
        solid: {
          textTransform: 'uppercase',
          bgColor: 'white',
          height: '164px'
        }
      }
    })
  }
})

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ChakraProvider theme={theme}>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Box
        fontFamily={'Neue Montreal'}
        marginLeft={[ '20px', '30px', null, '60px']}
        marginRight={[ '20px', '30px', null, '60px']}
        paddingTop={[ '0', null, null, '30px']}
      >
        <main id={'main'}>{children}</main>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
        </footer>
      </Box>
    </ChakraProvider>
  )
}

export default Layout
