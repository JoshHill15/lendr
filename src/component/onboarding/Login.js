import React, { useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styled from "styled-components";
import "../../App.css";
// import { axiosWithAuth } from "../utils/axiosWithAuth";

const validate = ({ username, password }) => {
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

const Login = (props) => {

  const [error, setError] = useState();
  const [data, setData] = useState({
    username: '',
    password: ''
  });

  const handleInput = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    // e.preventDefault();
    // console.log('hi there')
    // axiosWithAuth()
    axios
      .post('https://zero5nelsonm-lendr.herokuapp.com/login', 'grant_type=password&username=${this.state.username}&password=${this.state.password}', {
        headers: {
          //btoa is converting our client/id secret to base 64 - required for oath2
          Authorization: `Basic ${btoa('waZnYSi644XEABsBiNX9gcf8:NGyHSSzpj3rJaNSD9eFK98F')}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(response => {
        console.log(response);
        localStorage.setItem('token', response.data.payload)
        props.history.push('/dashboard');
      })
      .catch(error => {
        console.log("this is an error", error.response);
        setError(error.response.data.message)
      })
  }

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{ username: "", email: "", password: "", name: "" }}
      validate={validate}
      render={props => {
        return (
          <LoginC>
            <Form>
              <Field name="username" type="text" placeholder="Enter Username" onchange={handleInput} />
              <ErrorMessage className="error" name="username" component="div" />
              <Field name="password" type="text" placeholder="Enter Password" onchange={handleInput} />
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
