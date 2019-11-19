import React, { useEffect, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styled from "styled-components";
import "../../App.css";
import { gsap } from "gsap/all";

const validate = ({ username, email, password, name, checkPassword }) => {
  const errors = {};

  if (!username) {
    errors.username = "You need to input a user-name!";
  } else if (username.length < 3) {
    errors.username = "You need a longer user-name!";
  }

  if (!email) {
    errors.email = "You need to input an email!";
  }

  if (!password) {
    errors.password = "You need to input a password!";
  } else if (password.length < 7) {
    errors.password = "You need a longer password!";
  }

  if (!name) {
    errors.name = "You need to input a name!";
  }

  if (password !== checkPassword) {
    errors.checkPassword = "Your passwords need to match";
  }
  return errors;
};

function OnBoarding() {
  let FormElement = useRef(null);

  const Container = styled.section`
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

  const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 3%;
    border-radius: 7px;
    background: rgba(153, 50, 204, 0.7);
    box-shadow: 10px 10px 28px -12px rgba(0, 0, 0, 0.75);
    width: 25%;
    height: auto;
  `;

  const Button = styled.button`
    border: none;
    border-radius: 4px;
    margin: 2%;
    padding: 10px 25px;
    box-shadow: 10px 10px 28px -12px rgba(0, 0, 0, 0.75);
  `;

  useEffect(() => {
    gsap.to(FormElement, {
      duration: 5,
      scale: 1.1,
      ease: "elastic"
    });
  }, []);

  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        name: "",
        checkPassword: ""
      }}
      validate={validate}
      render={props => {
        return (
          <Container>
            <SignUpContainer
              ref={element => {
                FormElement = element;
              }}
            >
              <h3>Sign Up</h3>
              <Form>
                <Field name="name" type="text" placeholder="Enter Your Name" />
                <ErrorMessage className="error" name="name" component="div" />

                <Field
                  name="username"
                  type="text"
                  placeholder="Enter Username"
                />
                <ErrorMessage
                  className="error"
                  name="username"
                  component="div"
                />

                <Field name="email" type="email" placeholder="Enter Email" />
                <ErrorMessage className="error" name="email" component="div" />

                <Field
                  name="password"
                  type="password"
                  placeholder="Enter password"
                />
                <ErrorMessage
                  className="error"
                  name="password"
                  component="div"
                />

                <Field
                  name="checkPassword"
                  type="password"
                  placeholder="Check password"
                />
                <ErrorMessage
                  className="error"
                  name="checkPassword"
                  component="div"
                />
                <br />
                <Button type="submit">Sign Up</Button>
                <Button type="reset">Reset</Button>
              </Form>
            </SignUpContainer>
          </Container>
        );
      }}
    />
  );
}

export default OnBoarding;
