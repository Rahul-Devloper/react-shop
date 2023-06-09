import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import Badge from '@material-ui/core/Badge'

const Container = styled.div`
  height: 60px;
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Left = styled.div`
  flex: 1;
  text-align: left;
  display: flex;
  align-items: center;
`
const Center = styled.div`
  flex: 1;
  text-align: center;
`
const Right = styled.div`
  flex: 1;
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const Language = styled.div`
  font-size: 12px;
  cursor: pointer;
`
const SearchContainer = styled.div`
  font-size: 12px;
  cursor: pointer;
  border: 0.5px grey solid;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 35%;
  margin-left: 25px;
  padding: 5px;
  width: auto;
`

const Input = styled.input`
  border: none;
`

const Logo = styled.h1``

const MenuItem = styled.div`
  font-size: 14;
  cursor: pointer;
  margin-left: 25px;
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: 'grey', fontSize: '16px' }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Shop.</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color='primary'>
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
