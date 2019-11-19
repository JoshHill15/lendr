import React from "react";
import styled from "styled-components";

const Profile = () => {
  const Dash = styled.div`
    width: 150px;
    height: 100vh;
    background: lightblue;
    padding-top: 3%;
  `;

  const DashImg = styled.img`
    width: 125px;
    height: 125px;
    border-radius: 100%;
    padding-bottom: 2%;
  `;

  return (
    <Dash>
      <DashImg src="https://source.unsplash.com/random" alt="profile img" />
      <h3>NAME</h3>
    </Dash>
  );
};

export default Profile;
