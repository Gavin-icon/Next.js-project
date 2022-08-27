import Layout from "../../components/Layout"
import { Box, Divider, Heading, Text } from "@chakra-ui/core"
import { css } from "@emotion/core"
import axios from 'axios'
const DetailContainer = css`
  padding: 10px 0;
  & > p {
    font-size: 14px;
    margin-bottom: 10px;
  }
  & > img {
    margin-bottom: 10px;
    display: block;
  }
`
export default function Detail({detail}) {
  return <Layout>
    <Box maxW={1200} mx="auto" mt="30px">
      <Heading as="h2" size="xl">{detail.title}</Heading>
      <Heading mt="10px" as="h4" size="lg" color="gray.500" fontWeight="light">{detail.sub}</Heading>
      <Divider mt="10px" />
      <Box overflow="hidden" mt="10px">
        <Text float="left">作者：{detail.author}</Text>
        <Text float="right">发布时间：{detail.publish}</Text>
      </Box>
      <Divider mt="10px" />
      <Box css={DetailContainer} dangerouslySetInnerHTML={{__html: detail.content}}></Box>
    </Box>
  </Layout>
}
export async function getStaticPaths() {
  let {data} = await axios.get('/api/videos', {baseURL: 'http://localhost:3005'})
  let paths = data.map(id => ({params: {id}}))
  return{
    paths,
    fallback: false
  }
}
export async function getStaticProps({params}) {
  const {data: detail} = await axios.get(`/api/detail?id=${params.id}`,{baseURL: 'http://localhost:3005'})
  return {
    props: {
      detail
    }
  }
}