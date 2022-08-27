import { Box, Heading, HStack, Image, Text } from "@chakra-ui/core";
import Link from "next/link";
import axios from 'axios'
import {MdMovie} from 'react-icons/md'
export default function Movie({data, title}) {
  return <Box maxW={1200} mx="auto" mt="10">
    <HStack fontSize="24px">
      <MdMovie />
      <Heading as="h3" fontSize="24px">{title}</Heading>
    </HStack>
    <HStack mt="20px" spacing={3}>
      {
        data.map(movie => (<Link key={movie.id} href="/detail/[id]" as={`/detail/${movie.vid}`}><a><Box w={290}>
        <Image alt="" src={movie.url} />
        <Text mt="10px">{movie.title}</Text>
      </Box>
          </a></Link>))
      }
    </HStack>
  </Box>
}
export function loadMovie() {
  return axios.get('/api/movie', {baseURL: 'http://localhost:3005'})
}