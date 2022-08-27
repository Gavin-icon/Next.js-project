import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';
import {css} from '@emotion/core'
import styled from '@emotion/styled'
import { Box, Button, Heading, Text, Image } from '@chakra-ui/core';
import axios from 'axios'
const swiperContainer = css`
  position: relative;
  & > .carousel:last-child {
    position: absolute;
    left: 0;
    bottom: 0;
    & > .thumbs-wrapper > .thumbs {
      display: flex;
      justify-content: center;
    }
  }
`
const CarouselItem = styled.div`
  width: 100%;
  height: 350px;
  position: relative;
  & > div {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    color: #FFF;
    padding-top: 120px;
    text-align: left;
    width: 100%;
    max-width: 1200px;
    & > p {
      margin: 10px 0;
      font-size: 14px;
    }
    & > img {
      filter: brightness(50%);
    }
  }
`
export default function Swiper({data}) {
  return (
    <Carousel css={swiperContainer} showStatus={false} showIndicators={false} showArrows={false}>
      {
        data.map(swiper => (<CarouselItem key={swiper.id}>
          <Image alt='' src={swiper.url} />
          <Box>
            <Heading as="h2" size='lg'>{swiper.title}</Heading>
            <Text>{swiper.description}</Text>
            <Button colorScheme='red'>
              <Link href="/detail/[id]" as={`/detail/${swiper.vid}`}><a>CHECK DETAIL</a></Link>
            </Button>
          </Box>
        </CarouselItem>))
      }
    </Carousel>
  );
}

export function loadSwiper() {
  return axios.get('/api/swiper', {baseURL: 'http://localhost:3005'})
}
