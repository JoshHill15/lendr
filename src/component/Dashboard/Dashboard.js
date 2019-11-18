import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Items from "./items";
import AddItems from "./AddItems";

function Dashboard(props) {
  const [item, setItem] = useState([]);
  console.log(item);
  const BigC = styled.div`
    display: flex;
  `;

  const ItemContainer = styled.div`
    display: flex;
    width: 69%;
    flex-direction: column;
  `;

  const Container = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
  `;

  const Dash = styled.div`
    width: 30%;
    height: 600px;
    background: lightgray;
  `;
  const routeToAddItems = () => {
    props.history.push("/dashboard/additems");
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
        <BigC>
          <Dash>
            <img src="" alt="profile img" />
            <h3> Welcome back, NAME</h3>
            <p>username</p>
          </Dash>
          <ItemContainer>
            <button onClick={routeToAddItems}>Add Item</button>
            {item.map(i => (
              <Items key={i.id} item={i} />
            ))}
          </ItemContainer>
        </BigC>
      </section>
    </>
  );
}

export default Dashboard;
