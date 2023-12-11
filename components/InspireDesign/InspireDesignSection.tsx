import { products } from '@/data/product'
import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import InspireDesignCard from './InspireDesignCard'

const InspireDesignSection = ({products}: {products : []}) => {
  return (
    <>
        <Container maxW={'container.lg'} mt={['20px','30px','60px']}>
            <Heading fontSize={'30px'} mb={'30px'} textAlign={'center'}>
                    Inspire Design
            </Heading>

            <SimpleGrid columns={[1,2,3]} gap={'5px'}>
                {
                    products.map((product,index) => (
                        <InspireDesignCard key={index} product={product} />
                    ))
                }
            </SimpleGrid>
        </Container>
    </>
  )
}

export default InspireDesignSection