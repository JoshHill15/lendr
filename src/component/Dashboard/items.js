import React from "react";
import styled from "styled-components";
import "../../App.css";

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
    Borrowed = <p>Borrowed item:</p>;
  }

  let Lend;
  if (lend === true) {
    Lend = <p>Lent item:</p>;
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
    background: rgba(153, 50, 204, 0.4);
    border-radius: 7px;
    color: white;
  `;
  const IMG = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 100%;
  `;
  const Edit = styled.button`
    background: green;
    color: white;
    border-radius: 4px;
    border: none;
    &:hover {
      color: green;
      background: rgba(0, 0, 0, 0.3);
    }
  `;
  const Delete = styled.button`
    background: red;
    color: white;
    border-radius: 4px;
    border: none;
    &:hover {
      color: red;
      background: rgba(0, 0, 0, 0.3);
    }
  `;

  return (
    <Container>
      {Borrowed}
      {Lend}
      <IMG src={image} alt="img" />
      <p contenteditable="true">{username}</p>
      <p contenteditable="true">{item}</p>
      <p contenteditable="true">{borrowDate}</p>
      <p contenteditable="true">{dueDate}</p>
      <Edit>edit</Edit>
      <Delete>delete</Delete>
    </Container>
  );
}

export default Items;
