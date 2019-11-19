import React from "react";
import styled from "styled-components";
import alert from "../../Images/alert.png";
import help from "../../Images/help.png";
import setting from "../../Images/settings.png";

const TopBar = props => {
  const routeToAddItems = () => {
    props.props.history.push("/additems");
  };

  const TopContainer = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: flex-end;
    background: lightblue;
    padding: 0.5%;
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

  return (
    <TopContainer>
      <Button onClick={routeToAddItems}>Add Item</Button>
      <img src={alert} alt="notification icon" />
      <img src={setting} alt="setting icon" />
      <img src={help} alt="help icon" />
      <Button>Sign Out</Button>
    </TopContainer>
  );
};

export default TopBar;
