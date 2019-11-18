import React from "react";
import styled from "styled-components";

const Footer = () => {
  const Footer = styled.footer`
    text-align: center;
    background: rgb(63, 94, 251);
    padding: 1%;
  `;
  return (
    <Footer>
      <p>Copywrite 2019 // logo by freelogodesign.org</p>
    </Footer>
  );
};

export default Footer;
