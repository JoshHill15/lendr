import React from "react";
import styled from "styled-components";
import logo from "../Images/Lendr_logo_white.png";

const Header = props => {
  const routeToHome = () => {
    props.history.push("/");
  };

  const HeaderContainer = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    ${"" /* background: rgb(63, 94, 251); */}
    background: rgba(0,0,0,0.8);
    padding: 0;
    height: 100px;
  `;

  const IMG = styled.img`
    width: auto;
    height: 160%;
    margin: 0;
    padding: 0;
  `;

  return (
    <HeaderContainer>
      <IMG src={logo} alt="Lendr Logo" onClick={routeToHome} />
    </HeaderContainer>
  );
};
export default Header;
