import Head from "next/head"
import {readFile} from 'fs'
import {promisify} from 'util'
import {join} from 'path'
const read_file = promisify(readFile)
export default function Work ({data}) {
  return <>
    <Head>
      <title>work page</title>
    </Head>
    <div className="demo">123</div>
    <div>
      {data}
    </div>
    <style jsx>
      {
        `
          .demo {
            color: red;
            font-size:60px;
            padding-left: 20px;
            margin-top: 150px
          }
        `
      }
    </style>
  </>
}
// export async function getStaticProps () {
//   const data = await read_file(join(process.cwd(), 'pages', '_app.js'), 'utf-8')
//   return {
//     props: {
//       data
//     }
//   }
// }
export async function getServerSideProps (context) {
  console.log(context.query)
  const data = await read_file(join(process.cwd(), 'pages', '_app.js'), 'utf-8')
  console.log(data)
  return {
    props: {
      data
    }
  }
}