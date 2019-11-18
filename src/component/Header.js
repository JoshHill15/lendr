import React from "react";
import styled from "styled-components";
import logo from "../Images/lendr_logo.png";

const Header = () => {
  const HeaderContainer = styled.header`
    display: flex;
    justify-content: center;
    background: rgb(63, 94, 251);
    padding: 0;
  `;

  const IMG = styled.img`
    width: 15%;
    height: auto;
  `;

  return (
    <HeaderContainer>
      <IMG src={logo} alt="Lendr Logo" />
    </HeaderContainer>
  );
};
export default Header;
