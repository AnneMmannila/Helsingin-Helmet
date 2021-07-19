import React from "react";
import styled from "styled-components";
import './style.css';

//creating styled component for title
const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  color: black;
`;

function Frontpage() {
  return (
    <div>
      <Title> HELSINGIN HELMET </Title>
    </div>
  );
}

export default Frontpage;
