"use client"
import React from 'react'
import { ChakraProvider} from '@chakra-ui/react'
import theme from '@/theme'


const Layout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
  return (
    <>
        <ChakraProvider theme={theme} cssVarsRoot="body">
            {children}
        </ChakraProvider>
    </>
  )
}

export default Layout
