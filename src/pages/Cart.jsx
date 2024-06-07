import React from 'react';
import styled from "styled-components";
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import { Home, ShoppingCartOutlined} from "@mui/icons-material";

const p = styled.div`
`

const TextLink = styled.a`  
    text-decoration: none; 
    color: black;
`

const Container = styled.div`
    height: 60px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 300px;
    padding-right: 317px;
    background-color: #ffffff;
`

const Q = styled.div`
`

const Wrapper = styled.div`
    padding-bottom: 60px;
    display: flex;
    justify-content: space-between;
    color: black;
`

const Left = styled.div`
    flex:1;
    text-align: left;
    align-items: center;
`

const Center = styled.div`
    display: flex;
    flex:1;
    text-align: center;
    align-items: left;
`

const Right = styled.div`
    flex:3;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    text-decoration: none;
`

const SearchContainer = styled.div`
    border: 1px solid lightgray;
    align-items: center;
    display: flex;
    padding: 5px;
    width: 200px;
    height: 30px;
    margin-top: 20px;
`

const Input = styled.input`
    border: none;
`

const Logo = styled.h1`
    margin-top: 20px;
    font-weight: bold;
    text-decoration: none;
    color: black;
    cursor: pointer;
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-right: 30px;
`

const Cart = () => {
  return (
    <p>
      <Container>
        <Wrapper>
          <Left>
            <TextLink href="/"><Logo>QPICK</Logo></TextLink>
          </Left>
          <Center>
            <SmartphoneIcon style={{padding: 30}}/>
            <SearchContainer><SearchIcon style={{color: "gray", fontSize:16}}/><Input placeholder = "Введите модель телефона"></Input></SearchContainer>
          </Center>
          <Right>
            <TextLink href="/registration"><MenuItem>Регистрация</MenuItem></TextLink> 
            <TextLink href="/login"><MenuItem>Войти</MenuItem></TextLink>
            <TextLink href="/cart"><MenuItem><Badge badgeContent={4} color="primary"><ShoppingCartOutlined/></Badge></MenuItem></TextLink>
          </Right>
        </Wrapper>
      </Container>
    </p>
  );
}

export default Cart