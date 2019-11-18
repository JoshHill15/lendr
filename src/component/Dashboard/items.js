import React from "react";
import styled from "styled-components";

function Items(props) {
  const {
    image,
    item,
    username,
    name,
    borrowDate,
    dueDate,
    borrowed,
    lend
  } = props.item;

  let Borrowed;
  if (borrowed === true) {
    Borrowed = <p>Borrowed</p>;
  }

  let Lend;
  if (lend === true) {
    Lend = <p>Lent</p>;
  }

  const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    box-shadow: 10px 10px 28px -12px rgba(0, 0, 0, 0.75);
    align-items: center;
    width: 100%;
    margin: 0.5%;
    padding: 1%;
  `;
  const IMG = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 100%;
  `;
  const Edit = styled.button`
    background: green;
    color: white;
    border-radius: 4px;
    border: none;
  `;
  const Delete = styled.button`
    background: red;
    color: white;
    border-radius: 4px;
    border: none;
  `;

  return (
    <Container>
      {Borrowed}
      {Lend}
      <IMG src={image} alt="img" />
      <p>{username}</p>
      <p>{item}</p>
      <p>{borrowDate}</p>
      <p>{dueDate}</p>
      <Edit>edit</Edit>
      <Delete>delete</Delete>
    </Container>
  );
}

export default Items;
