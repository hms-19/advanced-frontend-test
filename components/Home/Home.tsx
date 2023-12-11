import { Flex, Heading, Kbd, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <>
        <Flex justifyContent={'center'} alignItems={'center'} w={'100%'} minH={'100vh'} flexDirection={'column'} gap={'10'}>
          <Heading as='h1'>
            Home Page
          </Heading>
          <Text>
              You can test   <Kbd>/fabrics/:fabricId</Kbd>
          </Text>

          <Text>
              Example Url   <Link href={'/fabrics/38'}><Kbd>/fabrics/22</Kbd></Link> <Link href={'/fabrics/38'}><Kbd>/fabrics/38</Kbd></Link>
          </Text>
        </Flex>
    </>
  )
}

export default Home