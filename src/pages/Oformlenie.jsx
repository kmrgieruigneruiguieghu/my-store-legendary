import React from 'react';
import styled from "styled-components";
import Iframe from 'react-iframe';
import Adress from '../pictures/adress.jpg';
import Visa from '../pictures/Visa.jpg';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Promocod from '../pictures/promocod.jpg';

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

const H1 = styled.h2`
    margin-left: 800px;
    margin-top: 30px;
`

const H2 = styled.h3`
margin-left: 50px;
margin-top: 30px;
`

const H3 = styled.h3`
margin-top: 30px;
margin-bottom: 30px;
`

const H4 = styled.h3`
margin-top: 50px;
margin-bottom: 30px;
`

const H5 = styled.h3`
margin-top: 30px;
margin-bottom: 10px;
`

const Rub = styled.h3`
    margin-left: 120px;
    margin-top: 30px;
`

const Div = styled.div`
`

const Div2 = styled.div`
    margin-top: 40px;
    margin-left: 400px;
    background-image: url("src/pictures/white2.png");
    background-repeat: no-repeat;
    height: 700px;
    width: 500px;
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

const SearchContainer4 = styled.div`
    border: 1px solid lightgray;
    align-items: center;
    display: flex;
    width: 385px;
    height: 40px;
    margin-top: 20px;
    background-color: #bebebe;
    margin-left: 0px;
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

const TextLink = styled.a`
  text-decoration: none; 
  color: white;
`

const Div5 = styled.div`
display:flex;
`

const Ul= styled.ul`
    margin-top: 40px;
    margin-left: 50px;
    background-image: url("src/pictures/white3.png");
    background-repeat: no-repeat;
    height: 700px;
    width: 500px;
    color: black;
`

const Div6= styled.div`
display: flex;
margin-bottom: 10px;
`

const Div7= styled.div`
display: flex;
margin-bottom: 10px;
`

const Div8= styled.div`
display: flex;
`

const Text1= styled.div`
margin-right: 20px;
`

const Text2= styled.div`
margin-right: 120px;
`

const Text3= styled.div`
margin-left: 36.906px;
margin-right: 253px;
`

const Text4= styled.div`
margin-left: 36.906px;
margin-right: 257px;
`

const Text5= styled.div`
margin-top: 5px;
margin-right: 20px;
`

const Visa1= styled.div`
margin-right: 15px;
margin-top: 5px;
`

const Promocod1= styled.div`
margin-right: 20px;
margin-top: 5px;
`

const Button = styled.button`
  text-decoration: none; 
  color: white;
  width: 385px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  background: #f73a00;
  box-shadow: 0 3px 3px #962a00;
  cursor: pointer;
  text-decoration: none;
`

const Oformlenie = () => {
  return (
    <div>
        <Container>
            <TextLink href="/"><Head><h2>QPICK</h2></Head></TextLink>
            <Div>
                <H1><h2>Оформление заказа</h2></H1>
                <Div5>
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
                    <Ul>
                        <H3><h3>Ваш заказ</h3></H3>
                        <Div6>
                            <Text1>1x</Text1>
                            <Text2>Наушники Apple BYZ S852I</Text2>
                            587 ₽
                        </Div6>
                        <Div6>
                            <Text3>Доставка</Text3>
                            100 ₽
                        </Div6>
                        <Div8>
                            <Text4>К оплате</Text4>
                            687 ₽
                        </Div8>
                        <H4><h3>Способ оплаты</h3></H4>
                        <Div7>
                            <Visa1><img src={Visa}/></Visa1>
                            <KeyboardArrowDownIcon/>
                        </Div7>
                        <Div8>
                            <Promocod1><img src={Promocod}/></Promocod1>
                            <Text5>Есть промокод?</Text5>
                            <ArrowRightIcon/>
                        </Div8>
                        <H5><h3>Номер получателя</h3></H5>
                        <SearchContainer4><Input placeholder = "+7 ___ ___ __ __"></Input></SearchContainer4>
                        <TextLink href="/accept"><Button>Закончить оформление</Button></TextLink>
                    </Ul>
                </Div5>
            </Div>
        </Container>
    </div>
  );
}

export default Oformlenie