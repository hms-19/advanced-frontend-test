import { Flex, Heading, Kbd, Text } from '@chakra-ui/react'
import React from 'react'

const Home = () => {
  return (
    <>
        <Flex justifyContent={'center'} alignItems={'center'} w={'100%'} minH={'100vh'} flexDirection={'column'} gap={'10'}>
          <Heading as='h1'>
            Home Page
          </Heading>
          <Text>
              You can test   <Kbd>/fabrics/:fabricId</Kbd> , I just develop with dummy data
          </Text>
        </Flex>
    </>
  )
}

export default Home