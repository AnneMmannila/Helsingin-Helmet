import React from "react";
import styled from "styled-components";
import './style.module.css';

//creating styled component for title
const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  color: black;
`;

function Frontpage() {

  const changeBackground =(e) => {
    e.target.style.background = 'rgba(168, 168, 168, 0.4)';
  }
  const changeBackgroundBack =(e) => {
    e.target.style.background = 'linear-gradient(0.25turn,#ffa7c9 40%, #0f0708';
  }

  return (
    <div>
      <Title onMouseOver = { (e) => changeBackground (e)} onMouseLeave = { (e) => changeBackgroundBack (e)}> HELSINGIN HELMET </Title>
    </div>
  );
}

export default Frontpage;
