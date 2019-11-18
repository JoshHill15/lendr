import React from "react";
import styled from "styled-components";
import splashlogo from "../Images/flame-8.png";
import { Route } from "react-router-dom";
import Login from "./onboarding/Login";

function Home(props) {
  const Splash = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: rgb(63, 94, 251);
    background: linear-gradient(
      90deg,
      rgba(63, 94, 251, 1) 32%,
      rgba(70, 250, 252, 1) 100%
    );
    height: 81vh;
  `;

  const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 25%;
    align-items: center;
    justify-content: space-around;
  `;

  const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const Button = styled.button`
    border: none;
    border-radius: 4px;
    margin: 2%;
    padding: 10px 25px;
    box-shadow: 10px 10px 28px -12px rgba(0, 0, 0, 0.75);
  `;

  const routeToSignUp = () => {
    props.history.push("./signup");
  };

  return (
    <Splash>
      <h1>Welcome to Lendr!</h1>
      <LogoContainer>
        <img alt="handshake logo" src={splashlogo} />
      </LogoContainer>
      <ButtonContainer>
        <Route path="/" render={props => <Login {...props} />} />
        <Button onClick={routeToSignUp}>Sign Up</Button>
      </ButtonContainer>
    </Splash>
  );
}

export default Home;
