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
    background: rgb(63, 94, 251);
    background: linear-gradient(
      90deg,
      rgba(63, 94, 251, 1) 32%,
      rgba(70, 250, 252, 1) 100%
    );
    height: 88vh;
  `;

  const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 5%;
    border-radius: 7px;
  `;

  const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const IMG = styled.img`
    width: 65%;
    height: auto;
  `;

  const Button = styled.button`
    border: none;
    border-radius: 4px;
    margin: 2%;
    padding: 10px 25px;
    box-shadow: 10px 10px 28px -12px rgba(0, 0, 0, 0.75);
  `;

  const routeToSignUp = () => {
    props.history.push("/signup");
  };

  return (
    <Splash>
      <LogoContainer>
        <IMG alt="handshake logo" src={splashlogo} />
      </LogoContainer>
      <LoginContainer>
        <Route path="/" render={props => <Login {...props} />} />
        <Button onClick={routeToSignUp}>Sign Up</Button>
      </LoginContainer>
    </Splash>
  );
}

export default Home;
