import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import Items from "./items";
import AddItems from "./AddItems";

function Dashboard(props) {
  const ItemContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
  `;

  const Container = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
  `;

  const routeToAddItems = () => {
    props.history.push("/dashboard/additems");
  };

  return (
    <>
      <section>
        <h3> Welcome back, NAME</h3>
        <ItemContainer>
          <Container>
            <p>item was lent out to borrower, from lender</p>
            <p>item img</p>
            <p>item: item</p>
            <p>when its due</p>
          </Container>
          <Items />
        </ItemContainer>
        <button onClick={routeToAddItems}>Add Item</button>
        <Route
          path="/dashboard/additems"
          render={props => <AddItems {...props} />}
        />
      </section>
    </>
  );
}

export default Dashboard;
