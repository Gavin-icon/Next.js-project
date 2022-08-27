### Next.js-React服务端渲染应用框架，用于构建SEO友好的SPA应用。
1. 创建- npm init next-app next-guider
2. 特点：
 ①支持两种渲染方式：静态生产和服务端渲染
 ②无需配置路由
 ③支持静态导出，导出静态网站
 ④自动代码拆分，优化网站性能
 ⑤内置CSS-in-JS库 styled-jsx
 ⑥拥有专属的部署环境Vercel,也可以部署在其他平台
3. 页面跳转Link组件：
  采用JavaScript进行跳转，若JavaScript被禁用，则采用链接跳转；
  Link只加href属性，其余属性添加到a标签上；
  Link组件通过预取功能自动优化应用程序以获得最佳性能；
4. 修改页面元数据：
  引入Head组件，修改title标签；
  import Head from 'next/head';
  <Head> <title>123</title> </Head>
5. 添加样式的方式：className
  ①内置了css-in-js库 styled-jsx, 可以直接 <style jsx> 正常书写css样式 </style>
  ②模块样式，模块名.module.css, 引入后直接打.调用
  ③全局样式，在pages文件夹下新建_app.js文件 -- 引入全局样式文件 -- function MyApp(Component, pageProps){ return <Component {...pageProps} /> } export default MyApp
6. 渲染方式：
  静态生成：{
    无数据静态生成 -- 直接打包
    有数据静态生成 -- 依赖数据的那一个模块 + export async function getStaticProps() { return { props: {data} } }
  }
  服务端渲染： {
    依赖数据的那一个模块 + export async function getServerSideProps(context) { console.log(context.query) return { props: {data} } }
  }
7. 基于动态路由的静态生成：
  pages文件夹下新建文件夹，内部新建[id].js类型文件；
  export async function getStaticPaths() {
    return {
      paths: [{params: {id: 1}}, {params: {id: 2}}],
      fallback: false
    }
  }
8. fallback为true时如何监测到正在生成新的模板文件？
  从 next/router 中解构出 useRouter, 监测useRouter().isFallback属性为true则正在生成！
9. 自定义404页面： pages文件夹下404.js
10. API Routes的使用： export default function handler (req,res) { res.status(200).json({id: 1, name: 'ls'}) }