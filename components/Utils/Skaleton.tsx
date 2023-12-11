import { Box, Container, SimpleGrid, Skeleton, SkeletonCircle, SkeletonText, Stack } from '@chakra-ui/react'
import React from 'react'

const Skaleton = () => {
  return (
    <>
      <Container maxW={'container.lg'} mt={['20px','30px','60px']}>
        <SimpleGrid  columns={[1,1,2]} gap={'30px'} mt={'30px'}>
            <Skeleton height='400px' />
            <Stack>
                <Skeleton height='80px' />
                <Skeleton height='80px' />
                <Skeleton height='80px' />
                <Skeleton height='80px' />
            </Stack>
        </SimpleGrid>
        <Stack mt={'30px'}>
                <Skeleton height='20px' />
                <Skeleton height='20px' />
                <Skeleton height='20px' />
                <Skeleton height='20px' />
        </Stack>
        <SimpleGrid>
        </SimpleGrid>
        <SimpleGrid  columns={[1,2,3]} gap={'30px'} mt={'30px'}>
            <Box padding='6' boxShadow='lg' bg='dark'>
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
            </Box>
            <Box padding='6' boxShadow='lg' bg='dark'>
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
            </Box>
            <Box padding='6' boxShadow='lg' bg='dark'>
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
            </Box>
            <Box padding='6' boxShadow='lg' bg='dark'>
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
            </Box>
        </SimpleGrid>
     </Container>
    </>
  )
}

export default Skaleton