import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import styled from "styled-components";
import Header from "../Header";
import { gsap } from "gsap/all";

const OnBoarding = props => {
  const [error, setError] = useState();
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    email: ""
  });
  const handleChange = e => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("https://zero5nelsonm-lendr.herokuapp.com/createnewuser", {
        username: newUser.username,
        email: newUser.email,
        password: newUser.password
      })
      .then(response => {
        console.log(response);
        props.history.push("/dashboard");
      })
      .catch(error => {
        console.log(error.response);
      });
    localStorage.setItem("token");
  };
  console.log(newUser);
  // ========== GREENSOCK ========== //
  let FormElement = useRef(null);

  useEffect(() => {
    gsap.to(FormElement, {
      duration: 5,
      scale: 1.1,
      ease: "elastic(1)"
    });
  }, []);

  // ========== STYLED COMPONENTS ========== //

  const Button = styled.button`
    border: none;
    border-radius: 4px;
    margin: 2%;
    padding: 10px 25px;
    box-shadow: 10px 10px 28px -12px rgba(0, 0, 0, 0.75);
  `;

  return (
    <>
      <Header />
      <section className="splash">
        <div
          className="sign-up-container"
          ref={element => {
            FormElement = element;
          }}
        >
          <form onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <div className="login">
              {error && <div className="error">{error}</div>}
              <input
                type="text"
                name="username"
                placeholder="User Name"
                value={newUser.username}
                onChange={handleChange}
              />
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={newUser.email}
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="password"
                value={newUser.password}
                onChange={handleChange}
              />
              <Button className="button" type="submit">
                Sign In
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
export default OnBoarding;
