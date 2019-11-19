import React from "react";
import styled from "styled-components";

const Profile = () => {
  const Dash = styled.div`
    width: 30%;
    height: 100vh;
    background: lightblue;
    padding-top: 3%;
  `;

  const DashImg = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 100%;
    padding-bottom: 2%;
  `;

  return (
    <Dash>
      <DashImg src="https://source.unsplash.com/random" alt="profile img" />
      <h3> Welcome back, NAME</h3>
      <p>username</p>
    </Dash>
  );
};

export default Profile;
