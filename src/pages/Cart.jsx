import React from 'react';
import styled from "styled-components";
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import { Home, ShoppingCartOutlined} from "@mui/icons-material";
import olejka from '../pictures/telejka.jpg';
import Facebook from "../pictures/Facebook.jpg";
import Telegram from "../pictures/telegram.jpg";

const p = styled.div`
`

const TextLink = styled.a`  
    text-decoration: none; 
    color: black;
`

const Container = styled.div`
    height: 60px;
    padding: 10px 300px;
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

const Img0 = styled.div`
    margin-left: 400px;
    margin-top: 50px;
`

const Text = styled.div`
  color: black;
`

const Text1 = styled.div`
  color: black;
`

const Yrw = styled.h1`
  margin-left: 500px;
  margin-top: 15px;
`

const Wry = styled.div`
  margin-left: 468px;
`

const TextLink0 = styled.a`
  text-decoration: none; 
  color: white;
`

const Button = styled.button`
  text-decoration: none; 
  color: white;
  width: 100%;
  max-width: 280px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-left: 469px;
  border: none;
  border-radius: 3px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  background: #3b3b3b;
  box-shadow: 0 3px 3px #8b8b8b;
  cursor: pointer;
  text-decoration: none;
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
        <Img0><img src={olejka}/></Img0>
        <Yrw><Text>Корзина пуста</Text></Yrw>
        <Wry><Text1>Но это никогда не поздно исправить :)</Text1></Wry>
        <TextLink0 href="/"><Button>В каталог товаров</Button></TextLink0>
      </Container>
    </p>
  );
}

export default Cart