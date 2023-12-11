
import { Box, Flex, Heading, Table, TableContainer, Tbody, Td, Text, Th, Tr } from '@chakra-ui/react'
import React from 'react'
import Rating from '../Utils/Rating';
import { FabricContentProps } from '@/types/fabric';

const cellStyle = {
    width: '10%',
    border: '1px solid #fff',
    fontWeight: 'bold',
    fontSize: '16px',
    color: "#fff"
}

const FabricContent = ({type,material,weave,weight,finish,comfort,ironing} : FabricContentProps) => {
  return (
    <>
        <Flex w={'100%'} minH={'100%'} flexDirection={'column'} alignItems={'start'} justifyContent={'space-between'} gap={'30px'}>
            <TableContainer w={'100%'}>
                <Table variant='simple'>
                    <Tbody>
                        <Tr>
                            <Th sx={cellStyle}>Type</Th>
                            <Td sx={{ ...cellStyle, color: "#ccc", w: '90%' }}>{type ?? '-'}</Td>
                        </Tr>
                        <Tr>
                            <Th sx={cellStyle}>Material</Th>
                            <Td sx={{ ...cellStyle, color: "#ccc", w: '90%' }}>{material ?? '-'}</Td>
                        </Tr>
                        <Tr>
                            <Th sx={cellStyle}>Webart</Th>
                            <Td sx={{ ...cellStyle, color: "#ccc", w: '90%' }}>{weave}</Td>
                        </Tr>
                        <Tr>
                            <Th sx={cellStyle}>gewicht</Th>
                            <Td sx={{ ...cellStyle, color: "#ccc", w: '90%' }}>{weight}</Td>
                        </Tr>
                        <Tr>
                            <Th sx={cellStyle}>Finish</Th>
                            <Td sx={{ ...cellStyle, color: "#ccc", w: '90%' }}>{finish}</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
            <Box>
                <Flex gap={'10px'} alignItems={'center'} mb={'10px'}>
                    <Heading fontSize={'16px'} minW={'70px'}>
                        Ironing 
                    </Heading>
                    <Rating rate={ironing} />
                </Flex>
                <Flex gap={'10px'} alignItems={'center'}>
                    <Heading fontSize={'16px'} minW={'70px'}>
                        Comfort 
                    </Heading>
                    <Rating rate={comfort} />
                </Flex>
            </Box>
        </Flex>
    </>
  )
}

export default FabricContent