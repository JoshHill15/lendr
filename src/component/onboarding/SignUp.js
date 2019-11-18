import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styled from "styled-components";
import "../../App.css";

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
    errors.name = "you need to input a name!";
  }

  if (password !== checkPassword) {
    errors.checkPassword = "your passwords need to match";
  }
  return errors;
};

function OnBoarding() {
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
    height: 81vh;
  `;

  const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    box-shadow: 10px 10px 28px -12px rgba(0, 0, 0, 0.75);
    padding: 5%;
    border-radius: 7px;
    width: 30%;
  `;

  const Button = styled.button`
    border: none;
    border-radius: 4px;
    margin: 2%;
    padding: 10px 25px;
    box-shadow: 10px 10px 28px -12px rgba(0, 0, 0, 0.75);
  `;

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
            <SignUpContainer>
              <Form>
                <Field name="name" type="text" placeholder="Enter Your Name" />
                <ErrorMessage className="error" name="name" component="span" />

                <Field
                  name="username"
                  type="text"
                  placeholder="Enter Username"
                />
                <ErrorMessage
                  className="error"
                  name="username"
                  component="span"
                />

                <Field name="email" type="email" placeholder="Enter Email" />
                <ErrorMessage className="error" name="email" component="span" />

                <Field
                  name="password"
                  type="password"
                  placeholder="Enter password"
                />
                <ErrorMessage
                  className="error"
                  name="password"
                  component="span"
                />

                <Field
                  name="checkPassword"
                  type="password"
                  placeholder="Check password"
                />
                <ErrorMessage
                  className="error"
                  name="checkPassword"
                  component="span"
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
