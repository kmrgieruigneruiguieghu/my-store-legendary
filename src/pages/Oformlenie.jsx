import { Password } from '@mui/icons-material';
import React from 'react';
import styled from "styled-components";
import Iframe from 'react-iframe';
import Adress from '../pictures/adress.jpg';

const Container = styled.div`
    height: 953px;
    background-image: url("src/pictures/Square2.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    color: white;
`

const Head = styled.h2`
margin-left: 50px;
padding-top: 35px;
`

const H2 = styled.h3`
margin-left: 50px;
margin-top: 30px;
`

const H1 = styled.h2`
    margin-left: 800px;
    margin-top: 30px;
`

const Rub = styled.h3`
margin-left: 120px;
    margin-top: 30px;
`

const Div = styled.div`
`

const Div2 = styled.div`
    margin-top: 40px;
    margin-left: 300px;
    background-image: url("src/pictures/white2.png");
    background-repeat: no-repeat;
    height: 700px;
    color: black;
`

const Div3 = styled.div`
    display: flex;
`

const Div4 = styled.div`
    display: flex;
`

const Img1 = styled.div`
margin-top: 15px;
margin-left: 50px;
`

const Iframee = styled.iframe`
margin-left: 50px;
margin-top: 20px;
    width: 380px;
    height: 450;
    /* border: 0; */
`

const SearchContainer = styled.div`
    border: 1px solid lightgray;
    align-items: center;
    display: flex;
    width: 385px;
    height: 40px;
    margin-top: 20px;
    background-color: #bebebe;
    margin-left: 50px;
    border-radius: 10px;
`

const SearchContainer1 = styled.div`
    border: 1px solid lightgray;
    align-items: center;
    display: flex;
    width: 180px;
    height: 40px;
    margin-top: 20px;
    background-color: #bebebe;
    margin-left: 50px;
    border-radius: 10px;
`

const SearchContainer2 = styled.div`
    border: 1px solid lightgray;
    align-items: center;
    display: flex;
    width: 180px;
    height: 40px;
    margin-top: 20px;
    background-color: #bebebe;
    margin-left: 23px;
    border-radius: 10px;
`

const SearchContainer3 = styled.div`
    border: 1px solid lightgray;
    align-items: center;
    display: flex;
    width: 180px;
    height: 40px;
    margin-top: 20px;
    background-color: #bebebe;
    margin-left: 50px;
    border-radius: 10px;
`

const Input = styled.input`
    border: none;
    height: 40px;
    width: 385px;
    border-radius: 10px;
    background-color: #bebebe;
`

const Input1 = styled.input`
    border: none;
    height: 40px;
    width: 180px;
    border-radius: 10px;
    background-color: #bebebe;
`

const Input2 = styled.input`
    border: none;
    height: 40px;
    width: 180px;
    border-radius: 10px;
    background-color: #bebebe;
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

const Div5 = styled.div`
display: flex;
`

const Div6= styled.div`
`


const Oformlenie = () => {
  return (
    <div>
        <Container>
            <TextLink href="/"><Head><h2>QPICK</h2></Head></TextLink>
            <Div>
                <H1><h2>Оформление заказа</h2></H1>
                {/* <Div5> */}
                    <Div2>
                        <Div3>
                            <H2><h3>Доставка курьером</h3></H2>
                            <Rub><h3>100 ₽</h3></Rub>
                        </Div3>
                        <Iframee><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1157.3955131784007!2d37.61160218782746!3d55.69084045892387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54ca8181725cf%3A0x4235fc389dbf8faf!2z0KjQutC-0LvQsCAyNtC60LDQtNGA!5e0!3m2!1sru!2sru!4v1718100552389!5m2!1sru!2sru" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/></Iframee>
                        <Img1><img src={Adress}/></Img1>
                        <SearchContainer><Input placeholder = "Город"></Input></SearchContainer>
                        <SearchContainer><Input placeholder = "Улица / Район"></Input></SearchContainer>
                        <Div4>
                            <SearchContainer1><Input1 placeholder = "Дом"></Input1></SearchContainer1>
                            <SearchContainer2><Input2 placeholder = "Подъезд"></Input2></SearchContainer2>
                        </Div4>
                        <SearchContainer3><Input2 placeholder = "Квартира"></Input2></SearchContainer3>
                    </Div2>
                    {/* <Div6>
                        <H1><h2>Ваш заказ</h2></H1>
                    </Div6> */}
                {/* </Div5> */}
                
              {/* <TextLink href="/login"><Button>Подтвердить</Button></TextLink> */}
            </Div>
        </Container>
    </div>
  );
}

export default Oformlenie