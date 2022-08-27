import {useRouter} from 'next/router'
export default function Verb({data}) {
  console.log(data)
  const router = useRouter()
  // fallback是否正在生成，useRouter().isFallback 如果正在生成，则显示loading，否则显示原数据
  if (router.isFallback) return <div>loading...</div>
  return (
    <div>
      <span>{data.id}</span>
      <span>{data.title}</span>
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: [{params: {id: "1"}}, {params: {id: "2"}}],
    fallback: true // 是否可以依据请求生产对应的html
  }
}

export async function getStaticProps({params}) {
  const id = params.id
  let data
  switch (id) {
    case '1':
      data = {id: '1', title: '小鸟'}
      break;
    case '2': 
      data = {id: '2', title: '小小鸟'}
      break;
    case '3':
      data = {id: '3', title: '333'}
      break;
    default:
      data = {}
      break;
  }
  return {
    props: {
      data
    }
  }
}