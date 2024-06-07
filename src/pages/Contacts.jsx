import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    height: 953px;
    background-image: url("src/pictures/Square.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    color: white;
`

const Div = styled.div`
  text-align: center;
  padding: 1px 300px;
`

const TextLink = styled.a`
  text-decoration: none; 
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

const Contacts = () => {
  return (
    <div>
      <Container>
        <TextLink href="/"><H2><h2>QPICK</h2></H2></TextLink>
            <Div>
              <H1><h1>Контакты</h1></H1>
            </Div>
      </Container>
    </div>
  );
}

export default Contacts