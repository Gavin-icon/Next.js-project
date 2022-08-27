import {Box, Container, Button, Image} from '@chakra-ui/core'
import styled from '@emotion/styled'
import {css} from '@emotion/core'
import {FaSearch, FaSignInAlt} from 'react-icons/fa'
import {BsFillPersonFill} from 'react-icons/bs'

const SignInANdJoin = styled.div`
  height: 52px;
  line-height: 52px;
  border-left: 1px solid #393939;
  border-right: 1px solid #393939;
  padding: 0 6px;
  float: left;
  color: #FFF;
  & > button {
    padding: 0 10px;
  }
  & > button:nth-of-type(1):after {
    content: '';
    width: 1px;
    height: 10px;
    background: #fff;
    position: absolute;
    right: 0;
    top: 15px;
  }
`
const logo = css`
  position: absolute;
  left: 50%;
  top: 12px;
  transform: traslate(-50%, -50%);
  width: 100px;
`;
const Search = styled.a`
  float: right;
  height: 52px;
  border-left: 1px solid #393939;
  border-right: 1px solid #393939;
  color: #FFF;
  font-size: 20px;
  display: flex;
  align-items: center;
  padding: 0 10px;
`

export default function Header() {
  return (
    <Box height="52px" bgColor="#202020" borderBottom="1px solid #393939">
      <Container height="52px" maxWidth="1200px">
        <SignInANdJoin >
          <Button bgColor="#202020" leftIcon={<FaSignInAlt />}>登录</Button>
          <Button bgColor="#202020" leftIcon={<BsFillPersonFill />}>注册</Button>
        </SignInANdJoin>
        <Image src='/logo.png' alt='' css={logo}/>
        <Search>
          <FaSearch />
        </Search>
      </Container>
    </Box>
  )
}