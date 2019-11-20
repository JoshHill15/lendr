import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Items from "./items";
import Profile from "./Profile";
import { tsConstructorType } from "@babel/types";
import TopBar from "./TopBar";

function Dashboard(props) {
  const [item, setItem] = useState();

  const BigC = styled.div`
    display: flex;
  `;

  const ItemContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 1% 0.5%;
    background: rgb(63, 94, 251);
    background: linear-gradient(
      90deg,
      rgba(63, 94, 251, 1) 32%,
      rgba(70, 250, 252, 1) 100%
    );
  `;
  const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
  `;

  const ItemCards = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin-top: 1%;
    padding: 2%;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 7px;
    box-shadow: 10px 10px 28px -12px rgba(0, 0, 0, 0.75);
  `;

  const Button = styled.button`
    border: none;
    border-radius: 4px;
    padding: 5px;
    box-shadow: 10px 10px 28px -12px rgba(0, 0, 0, 0.75);

    &:hover {
      background: blue;
      color: white;
    }
  `;

  const routeToAddItems = () => {
    props.history.push("/additems");
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/items")
      .then(res => setItem(res.data))
      .catch(err => console.log(`HOLD ON `, err));
  }, []);

  return (
    <>
      <section>
        <TopBar props={props} />
        <BigC>
          <Profile />
          <ItemContainer>
            <ButtonContainer>
              <Button onClick={routeToAddItems}>Add Item</Button>
            </ButtonContainer>
            <ItemCards>
              {item === undefined ? (
                <p>Add an item to continue...</p>
              ) : (
                item.map(i => <Items key={i.id} item={i} />)
              )}
            </ItemCards>
          </ItemContainer>
        </BigC>
      </section>
    </>
  );
}

export default Dashboard;
