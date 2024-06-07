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

const Container_2 = styled.div`
    height: 230px;
    background-color: black;
    margin-top: 800px;
    color: white;
`

const CC = styled.div`
    display: flex;
    align-items: center;
`

const Text14 = styled.h1`
    font-weight: 600;
    margin-left: 100px;
    margin-bottom: 40px;
    cursor: pointer;
`

const Ul = styled.div`
    margin-left: 300px;
    list-style-type: none;
`

const Li_1 = styled.div`
    cursor: pointer;
    margin-top: 90px;
    margin-bottom: 20px;
`

const Li_2 = styled.div`
    cursor: pointer;
    margin-bottom: 20px;
`

const Li_3 = styled.div`
    cursor: pointer;
`

const Text15 = styled.div`
    margin-left: 200px;
    font-weight: 600;
    margin-top:40px;
    cursor: pointer;
`

const Text16 = styled.div`
    margin-left: 20px;
    font-weight: 600;
    margin-top:40px;
    cursor: pointer;
    color: orange;
`

const Text17 = styled.div`
margin-left: 20px;
    font-weight: 600;
    margin-top:40px;
    cursor: pointer;
`

const Img15 = styled.div`
margin-left: 130px;
margin-bottom: 50px;
cursor: pointer;
`

const Img16 = styled.div`
margin-left: 20px;
margin-bottom: 50px;
cursor: pointer;
`

const End = styled.div`
margin-top: 19px;
margin-left: 1450px;
cursor: pointer;
color: whitesmoke;
`

const TextLink1 = styled.a`  
    text-decoration: none; 
    color: white;
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
      <Container_2>
                <Q>
                    <CC>
                        <TextLink1 href="/"><Text14 >QPICK</Text14></TextLink1>
                        <Ul>
                            <Li_1><TextLink1 href="/favourites"><li>Избранное</li></TextLink1></Li_1>
                            <Li_2><TextLink1 href="/cart"><li>Корзина</li></TextLink1></Li_2>
                            <Li_3><TextLink1 href="/contacts"><li>Контакты</li></TextLink1></Li_3>
                        </Ul>
                        <Text15>Каз</Text15>
                        <Text16>Рус</Text16>
                        <Text17>Eng</Text17>
                        <Img15><TextLink1 href="https://www.rbc.ru/technology_and_media/21/03/2022/6238a5e89a79477e5dc0245f"><img src={Facebook}/></TextLink1></Img15>
                        <Img16><TextLink1 href="https://telegram.org/"><img src={Telegram}/></TextLink1></Img16>
                    </CC>
                    <End><TextLink1 href="/copyright">Copyright © 2024. Все права защищены.</TextLink1></End>
                </Q>
      </Container_2>
    </p>
  );
}

export default Cart