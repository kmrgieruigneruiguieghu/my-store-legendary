import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    background-color: black;
    color: #ffffff;
    height: 953px;
    background-image: url("src/pictures/square123.jpg");
    background-repeat: no-repeat;
`

const Head = styled.h2`
    margin-left: 50px;
    padding-top: 35px;
`

const TextLink = styled.a`
  text-decoration: none; 
  color: white;
`

const H2 = styled.h2`
margin-top: 390px;
margin-left: 570px;
`

const Reklama = () => {
  return (
    <div>
      <Container>
          <TextLink href="/"><Head><h2>QPICK</h2></Head></TextLink>
          <H2>По вопросам с рекламой свяжитесь с админом: +8 800 555 35 35</H2>
      </Container>
    </div>
  );
}

export default Reklama