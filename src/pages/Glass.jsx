import React from 'react';
import styled from "styled-components";
import Case11 from "../pictures/case11.png";

const Container = styled.div`
    height: 953px;
    background-image: url("src/pictures/rectangle.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    color: white;
`

const TextLink = styled.a`
  text-decoration: none; 
  color: white;
`

const TextLink1 = styled.a`
  text-decoration: none; 
  color: white;
  margin-left: 100px;
  & :hover{
      background-color: #f75b00;
    }
`

const TextLink2 = styled.a`
  text-decoration: none; 
  color: white;
  margin-left: 150px;
  & :hover{
      background-color: #f75b00;
    }
`

const H2 = styled.h2`
  margin-left: 1700px;
  padding-top: 30px;
`

const H1 = styled.h2`
  padding-top: 50px;
  margin-left: 100px;
  margin-bottom: 20px;
`

const Div = styled.div`
  padding: 1px 100px;
  display: flex;
`

const Img1 = styled.div`
`

const H3 = styled.h2`
margin-bottom: 20px;
`

const Text2 = styled.div`
`

const Button1 = styled.button`
  text-decoration: none; 
  color: white;
  width: 100%;
  max-width: 280px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  margin-left: 100px;
  border: none;
  border-radius: 3px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  background: #3b3b3b;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.5s;
`

const Button2 = styled.button`
  text-decoration: none; 
  color: white;
  width: 100%;
  max-width: 280px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  margin-left: 150px;
  border: none;
  border-radius: 3px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  background: #c72e00;
  /* background: linear-gradient(to right, #ff8800 40%, #dacc15 70%); */
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.5s;
`

const Ul = styled.div`
display: flex;
`

const Glass = () => {
  return (
    <div>
        <Container>
            <TextLink href="/"><H2><h2>QPICK</h2></H2></TextLink>
            <Div>
              <Img1><img src={Case11} style={{width: 400, height: 700}}/></Img1>
              <ul>
                <H1><h2>Стеклянный чехол для Iphone 13 Pro Max</h2></H1>
                <H3>Характеристики:</H3>
                <Text2>Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br/><br/>Commodi a fuga nulla quis cupiditate, ducimus minima corporis nobis quo<br/><br/>veritatis quaerat praesentium accusantium <br/><br/> similique molestiae dolor! <br/><br/>Assumenda quod saepe quo!</Text2>
                <Ul>
                  <TextLink1 href="/oform"><Button1>Купить 200₽</Button1></TextLink1>
                  <TextLink2 href="/cart"><Button2>Добавить в корзину</Button2></TextLink2>
                </Ul>
              </ul>
            </Div>
        </Container>
    </div>
  );
}

export default Glass