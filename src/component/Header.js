import React from "react";
import styled from "styled-components";
import logo from "../Images/lendr_logo.png";

const Header = () => {
  const HeaderContainer = styled.header`
    display: flex;
    justify-content: center;
    background: rgb(63, 94, 251);
  `;

  return (
    <HeaderContainer>
      <img src={logo} alt="Lendr Logo" />
    </HeaderContainer>
  );
};
export default Header;
