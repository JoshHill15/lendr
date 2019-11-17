import React from "react";
import styled from "styled-components";

const Footer = () => {
  const Footer = styled.footer`
    text-align: center;
    background: rgba(0, 0, 0, 0.6);
    padding: 1%;
  `;
  return (
    <Footer>
      <p>Copywrite 2019 // logo by freelogodesign.org</p>
    </Footer>
  );
};

export default Footer;
