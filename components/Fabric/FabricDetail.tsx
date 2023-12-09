"use client"

import { Box, Button, Container, Flex, Heading, Image, Link, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import FabricContent from './FabricContent';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { images } from '@/data/images';
import InspireDesignSection from '../InspireDesign/InspireDesignSection';
import { useRouter } from 'next/navigation';

const FabricDetail = ({fabricId} : {fabricId: number | string}) => {
  const router = useRouter();

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
      <Container maxW={'container.lg'} mt={['20px','30px','60px']}>
          
          <Flex alignItems={'center'} justifyContent={'space-between'}>
              <Heading fontSize={'20px'}>
                  {fabricId+" Minneapolies"}
              </Heading>
              
              <Link  href={'#inspire'} variant={'unstyled'} display={['none','none','block']}>
                <Flex alignItems={'center'} gap={'10px'}>
                  <Text>View Design Inspiration</Text> 
                  <IoIosArrowForward style={{ fontSize: '20px' }} />
                </Flex>
              </Link>
          </Flex>

          <SimpleGrid columns={[1,1,2]} gap={'30px'} mt={'30px'}>
              <Box w={'100%'} minH={'300px'}>
                <Slider {...settings}>
                    {
                      images.map((img,i) => (
                        <Image
                          key={i}
                          src={img.url}
                          width={'100%'}
                          height={'400px'}
                          objectFit={'cover'}
                          objectPosition={'top'}
                          alt='Fabric'
                        />
                      ))
                    }
                </Slider>
              </Box>
              <Box>
                  <FabricContent />
              </Box>
          </SimpleGrid>

          <Link
            href={'#inspire'} 
            w={'100%'} 
            display={['block','block','none']} 
            bgColor={'blue.300'}
            p={2}
            color={'white'}
            mt={'20px'}>
            <Flex alignItems={'center'} gap={'10px'} justifyContent={'center'}>
              <Text color={'white'}>View Design Inspiration</Text> 
              <IoIosArrowForward style={{ fontSize: '20px' }} />
            </Flex>
          </Link>

          <div id="inspire">
            <InspireDesignSection />
          </div>
      </Container>
    </>
  )
}

export default FabricDetail