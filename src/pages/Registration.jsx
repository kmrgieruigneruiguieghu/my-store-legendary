import { Password } from '@mui/icons-material';
import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    height: 953px;
    background-image: url("src/pictures/Square.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    color: white;
`

const H2 = styled.h2`
margin-left: 30px;
padding-top: 30px;
`

const H1 = styled.h3`
    margin-left: 40px;
    margin-top: 80px;
`

const Div = styled.div`
  text-align: center;
  padding: 1px 300px;
`

const Gmail = styled.h2`
  margin-right: 240px;
  margin-top: 100px;
`

const SearchContainer = styled.div`
    border: 1px solid lightgray;
    align-items: center;
    display: flex;
    width: 350px;
    height: 30px;
    margin-top: 20px;
    background-color: white;
    margin-left: 425px;
    border-radius: 30%;
`

const Input = styled.input`
    border: none;
    height: 30px;
    width: 350px;
    border-radius: 30%;
`

const Passwordd = styled.h2`
  margin-right: 375px;
  margin-top: 100px;
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
  margin-top: 100px;
  margin-left: 425px;
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
const TextLink = styled.a`
  text-decoration: none; 
  color: white;
`

const Registration = () => {
  return (
    <div>
        <Container>
            <TextLink href="/"><H2><h2>QPICK</h2></H2></TextLink>
            <Div>
              <H1><h1>Создание аккаунта</h1></H1>
              <Gmail>Электронная почта:</Gmail>
              <SearchContainer><Input placeholder = "qwerty@gmail.com"></Input></SearchContainer>
              <Passwordd>Пароль:</Passwordd>
              <SearchContainer><Input></Input></SearchContainer>
              <TextLink href="/login"><Button>Подтвердить</Button></TextLink>
            </Div>
        </Container>
    </div>
  );
}

export default Registration