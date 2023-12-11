"use client"

import { Box, Button, Container, Flex, Heading, Image, Link, SimpleGrid, Text, useBoolean } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import FabricContent from './FabricContent';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { images } from '@/data/images';
import InspireDesignSection from '../InspireDesign/InspireDesignSection';
import ClientBase from '../../public/js/befeni-fabric-api-wrapper.js';
import { config, token } from '@/apis';
import { formatCompositionLabel, getOriginalFabricID } from '@/utils/fabric';
import Skaleton from '../Utils/Skaleton';
import NoData from '../Utils/NoData';
import { products } from '../../data/product';

// slider settings
const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1
};

const FabricDetail = ({fabricId} : {fabricId: number | string}) => {

  const [data,setData] = useState<any>({})  
  const [gallaries,setGallaries] = useState<any>([])  
  const [loading,setLoading] = useBoolean(true)  


  const fetchData = async () => {
    const client : any = new ClientBase(config, 'de');
    client.updateAccessTokenDirectly(token);
    const id = getOriginalFabricID(fabricId)
    var fabric = await client.getFabric(id);
    
    var filters = {
      fabricIds: [id],
      familyIds: [],
      contrastFamilyIds: [],
      patterns: [],
      types: [],
      weaves: [],
      compositionIds: [],
      designs: [],
      collarStyles: [],
      cuffStyles: [],
      myShirtOnly: false,
      sotwOnly: false
    };
  
    var shirts = await client.getShirtGalleryShirts(filters, 'gallery_added_date', 'desc');
  
    var shirtValues = shirts.getValues();
    setGallaries(shirtValues)
    setData(fabric)
    setLoading.off()
  }

  
  useEffect(() => {
    fetchData()
  },[fabricId])

  if(loading){
    return <Skaleton />
  }

  if(data?.id == 0){
    return <NoData />
  }
  
  return (
    <>
      <Container maxW={'container.lg'} mt={['20px','30px','60px']}>
          <Flex alignItems={'center'} justifyContent={'space-between'}>
              <Heading fontSize={'20px'}>
                  {data.id+" "+data.name}
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
                      data.fabricImages.slice(0,6).map((img : any,i : number) => (
                        <Image
                          key={i}
                          src={img.image_url}
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
                  <FabricContent 
                    type={data.type} 
                    material={formatCompositionLabel(data.getFabricCompositionLabel())} 
                    weave={data.default_weave} 
                    weight={data.default_weight}
                    finish={data.default_finish}
                    comfort={data.comfort}
                    ironing={data.ironing} />
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
            {
              gallaries.length > 0 ? <InspireDesignSection products={gallaries} /> : 
              <Heading fontSize={'20px'} textAlign={'center'} mt={'30px'}>
                  There is no Inspire Design
              </Heading>
            }
          </div>
      </Container>
    </>
  )
}

export default FabricDetail