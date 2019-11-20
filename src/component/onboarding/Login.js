import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styled from "styled-components";
import "../../App.css";

const validate = ({ username, password }) => {
  // const [username, setUsername] = useState([])
  const errors = {};

  if (!username) {
    errors.username = "You need to input a username!";
  } else if (username.length < 3) {
    errors.username = "You need a longer username!";
  }

  if (!password) {
    errors.password = "You need to input a password!";
  } else if (password.length < 7) {
    errors.password = "You need a longer password!";
  }

  return errors;
};

const LoginC = styled.div`
  height: 300px;
  width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content center;
  background: rgba(153,50,204,0.7);
  opacity: .8;
  box-shadow: 10px 10px 28px -12px rgba(0, 0, 0, 0.75);
  margin-bottom:3%;
  border-radius:4%;
`;

const Button = styled.button`
  border: none;
  border-radius: 4px;
  margin: 2%;
  padding: 10px 25px;
  box-shadow: 10px 10px 28px -12px rgba(0, 0, 0, 0.75);
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
              <Field name="username" type="text" placeholder="Enter Username" />
              <ErrorMessage className="error" name="username" component="div" />
              <Field name="password" type="text" placeholder="Enter Password" />
              <ErrorMessage className="error" name="password" component="div" />
              <br />
              <Button type="submit">Login</Button>
            </Form>
          </LoginC>
        );
      }}
    />
  );
}

export default Login;
