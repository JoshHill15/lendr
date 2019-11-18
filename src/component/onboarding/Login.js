import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styled from "styled-components";
import "../../App.css";

const validate = ({ username, password }) => {
  const errors = {};

  if (!username) {
    errors.username = alert("You need to input a username!");
  } else if (username.length < 3) {
    errors.username = alert("You need a longer username!");
  }

  if (!password) {
    errors.password = alert("You need to input a password!");
  } else if (password.length < 7) {
    errors.password = alert("You need a longer password!");
  }

  return errors;
};

const LoginC = styled.div`
  height: 150px;
  width:320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content center;
  background: lavender;
  opacity: .8;
`;

function Login() {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "", name: "" }}
      validate={validate}
      render={props => {
        return (
          <LoginC>
            <Form>
              <ErrorMessage className="error" name="username" component="div" />
              <Field name="username" type="text" placeholder="Enter Username" />
              <br />
              <Field name="password" type="text" placeholder="Enter password" />
              <ErrorMessage className="error" name="password" component="div" />
              <br />
              <br />
              <button type="submit">Login</button>
            </Form>
          </LoginC>
        );
      }}
    />
  );
}

export default Login;
