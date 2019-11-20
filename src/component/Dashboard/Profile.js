import React, { useRef } from "react";
import { gsap } from "gsap/all";
import styled from "styled-components";
import current_items from "../../Images/current_items.png";
import history from "../../Images/history.png";
import help from "../../Images/help.png";
import setting from "../../Images/settings.png";

const Profile = () => {
  const Dash = styled.div`
    width: 60px;
    display: flex;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.8);
    padding: 0.5%;
  `;

  const Img = styled.img`
    width: 40px;
    height: auto;
    margin-top: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid red;
    &:hover {
      border-bottom: 1px dashed blue;
    }
  `;

  let imgBounce = useRef(null);
  let imgBounce1 = useRef(null);
  let imgBounce2 = useRef(null);
  let imgBounce3 = useRef(null);

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

  function bounce1() {
    gsap.to(imgBounce1, 1, {
      duration: 2.5,
      scale: 1.3,
      ease: "bounce.out"
    });
  }
  function scaleDown1() {
    gsap.to(imgBounce1, 1, {
      scale: 1
    });
  }

  function bounce2() {
    gsap.to(imgBounce2, 1, {
      duration: 2.5,
      scale: 1.3,
      ease: "bounce.out"
    });
  }
  function scaleDown2() {
    gsap.to(imgBounce2, 1, {
      scale: 1
    });
  }

  function bounce3() {
    gsap.to(imgBounce3, 1, {
      duration: 2.5,
      scale: 1.3,
      ease: "bounce.out"
    });
  }
  function scaleDown3() {
    gsap.to(imgBounce3, 1, {
      scale: 1
    });
  }

  return (
    <Dash>
      <Img
        onMouseEnter={bounce}
        onMouseLeave={scaleDown}
        ref={e => (imgBounce = e)}
        src={current_items}
        alt="items icon"
      />
      <Img
        onMouseEnter={bounce1}
        onMouseLeave={scaleDown1}
        ref={e => (imgBounce1 = e)}
        src={history}
        alt="history icon"
      />
      <Img
        onMouseEnter={bounce2}
        onMouseLeave={scaleDown2}
        ref={e => (imgBounce2 = e)}
        src={setting}
        alt="setting icon"
      />
      <Img
        onMouseEnter={bounce3}
        onMouseLeave={scaleDown3}
        ref={e => (imgBounce3 = e)}
        src={help}
        alt="help icon"
      />
    </Dash>
  );
};

export default Profile;
