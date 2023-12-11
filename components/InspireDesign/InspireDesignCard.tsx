import { Badge, Card, CardBody, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const InspireDesignCard = ({product} : { product: any}) => {
  return (
    <>
        <Card bgColor={'transparent'} shadow={'none'}>
            <CardBody>
                <Flex flexDirection={'column'} gap={2} justifyContent={'center'} alignItems={'center'}>
                    <Image 
                        src={product.shirtImages[0].image_url}
                        width={'100%'}
                        height={'400px'}
                        objectFit={'cover'}
                        borderRadius={'10px'}
                        alt='fabric'
                    />
                    <Badge p={2}>{product.price.reason} $ {product.price.value}</Badge>
                    <Heading 
                        color={'white'} 
                        fontWeight={'bold'}
                        textAlign={'center'} 
                        fontSize={'16px'}>{product.shirt_title}</Heading>
                    <Text 
                        color={'white.200'} 
                        fontWeight={'bold'} 
                        textAlign={'center'} 
                        fontSize={'14px'}>{product.fabric_composition_label}</Text>
                </Flex>
            </CardBody>
        </Card>
    </>
  )
}

export default InspireDesignCard