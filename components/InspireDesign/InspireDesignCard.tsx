import { ProductProps } from '@/types/product'
import { Badge, Card, CardBody, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const InspireDesignCard = ({product} : { product: ProductProps}) => {
  return (
    <>
        <Card bgColor={'transparent'} shadow={'none'}>
            <CardBody>
                <Flex flexDirection={'column'} gap={2} justifyContent={'center'} alignItems={'center'}>
                    <Image 
                        src={product.src}
                        width={'100%'}
                        height={'400px'}
                        objectFit={'cover'}
                        borderRadius={'10px'}
                        alt='fabric'
                    />
                    <Badge p={2}>$ {product.price}</Badge>
                    <Heading 
                        color={'white'} 
                        fontWeight={'bold'}
                        textAlign={'center'} 
                        fontSize={'16px'}>{product.name}</Heading>
                    <Text 
                        color={'white.200'} 
                        fontWeight={'bold'} 
                        textAlign={'center'} 
                        fontSize={'14px'}>{product.quality}</Text>
                </Flex>
            </CardBody>
        </Card>
    </>
  )
}

export default InspireDesignCard