import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    height: 60px;
    padding: 50px 300px;
    text-align: center;
    background-color: black;
    color: white;
`



const Registration = () => {
  return (
    <div>
        <Container>
            <h1>Создание личного кабинета</h1>
        </Container>
    </div>
  );
}

export default Registration