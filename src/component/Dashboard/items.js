import React from "react";
import styled from "styled-components";

function Items() {
  const Container = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
  `;
  return (
    <Container>
      <p>Test borrower, from lender</p>
      <p>Test img</p>
      <p>Test item</p>
      <p>Test when its due</p>
    </Container>
  );
}

export default Items;
