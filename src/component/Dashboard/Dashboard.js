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
    width: 82%;
    flex-direction: column;
  `;

  useEffect(() => {
    axios
      .get("https://zero5nelsonm-lendr.herokuapp.com/items/items")
      .then(res => setItem(res.data))
      .catch(err => console.log(`HOLD ON `, err));
  }, []);
  console.table(item);
  return (
    <>
      <section>
        <TopBar props={props} />
        <BigC>
          <Profile />
          <ItemContainer>
            {/* <button onClick={routeToAddItems}>Add Item</button> */}
            {item === undefined ? (
              <p>Add item to continue...</p>
            ) : (
                item.map(i => <Items key={i.id} item={i} />)
              )}
          </ItemContainer>
        </BigC>
      </section>
    </>
  );
}

export default Dashboard;
