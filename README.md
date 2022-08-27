### lagou-movie项目
npm init next-app movie
cd movie
npm install @chakra-ui/core@next
npx chakra-cli init --theme  // 克隆主题到项目中
npm install react-icons @emotion/core  @emotion/styled   //下载 emotion 库
npm install @emotion/babel-preset-css-prop --save-dev  // 下载 emotion 预置
配置预置，扩展原有的预置，在根目录新建文件.babelrc
————————————————
配置chakra-ui 主题，在 page目录下创建 app.js 文件:{
  import {ChakraProvider, CSSReset} from '@chakra-ui/core'
  import theme from '克隆的主题'
  export default function MyApp ({Compoennt, pageProps}) {
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Compoennt {...pageProps} />
    </ChakraProvider>
  }
}

### 项目采用技术栈：
1. @emotion/core 中的{css} : const div = css` 此处书写样式 `
   @emotion/styled的styled 进行自定义组件样式 : const divStyle = styled.div` 此处书写样式 `
2. chakra-ui/core组件库， 内部含有自定义的属性 | 类似于antdesign, antd, ...
   学会了哪些组件？ Box | Container | Button | Image | HStack | VStack | Heading | Divider
3. react-responsive-carousel包中的{carousel}，轮播图使用；使用从官网npmjs.com中查询; ----学会了查看源码控制内部一些样式的显示与隐藏;
4. Next.js: Link组件