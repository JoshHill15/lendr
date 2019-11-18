import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Items from "./items";
import AddItems from "./AddItems";

function Dashboard(props) {
  const [item, setItem] = useState([]);

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
    height: 80vh;
    background: lightblue;
    padding-top: 3%;
  `;

  const DashImg = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 100%;
    padding-bottom: 2%;
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
        <BigC>
          <Dash>
            <DashImg
              src="https://source.unsplash.com/random"
              alt="profile img"
            />
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
