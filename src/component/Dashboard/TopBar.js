import React, { useRef } from "react";
import styled from "styled-components";
import alert from "../../Images/alert.png";
import dashboardlogo from "../../Images/dashlogo.png";
import { gsap } from "gsap/all";

const TopBar = props => {
  const TopContainer = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background: rgba(0, 0, 0, 0.8);
    padding: 0.5%;
  `;

  const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 80%;
    color: white;
  `;

  const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 20%;
    color: white;
  `;

  const LogoImg = styled.img`
    width: 40px;
    height: auto;
    margin-right: 25px;
  `;

  const Img = styled.img`
    width: 40px;
    height: 40px;
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

  let imgBounce = useRef(null);
  function bounce() {
    gsap.to(imgBounce, 1, {
      duration: 2.5,
      scale: 1.3,
      ease: "bounce.out"
    });
  }
  function scaleDown() {
    gsap.to(imgBounce, 1, {
      scale: 1
    });
  }
  return (
    <TopContainer>
      <LogoContainer>
        <LogoImg src={dashboardlogo} alt="Lendr dashboard logo" />
        <p>User dashboard</p>
      </LogoContainer>
      <ButtonContainer>
        <p>NAME</p>
        {/* <Button onClick={routeToAddItems}>Add Item</Button> */}
        <Img
          onMouseLeave={scaleDown}
          onMouseEnter={bounce}
          ref={element => {
            imgBounce = element;
          }}
          src={alert}
          alt="notification icon"
        />
        <Img src="https://source.unsplash.com/random" alt="profile img" />
        <Button>Sign Out</Button>
      </ButtonContainer>
    </TopContainer>
  );
};

export default TopBar;
