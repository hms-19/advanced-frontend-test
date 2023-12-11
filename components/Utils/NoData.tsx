import { Container, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const NoData = () => {
  return (
    <>
      <Container maxW={'container.lg'} mt={['20px','30px','60px']}>

        <Flex flexDirection={'column'} gap={'20px'} justifyContent={'center'} alignItems={'center'}>
            <Heading textAlign={'center'}>
                No Data Found
            </Heading>
            <Text>
                    There is no data for this fabric id
            </Text>
        </Flex>
      </Container>
    </>
  )
}

export default NoData