import React from "react";
import styled from "styled-components";
import logo from "../Images/lendr_logo.png";

const Header = () => {
  const Container = styled.header`
    display: flex;
    justify-content: center;
    background: rgba(0, 0, 0, 0.3);
  `;

  return (
    <Container>
      <img src={logo} alt="Lendr Logo" />
    </Container>
  );
};
export default Header;
