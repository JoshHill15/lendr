import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const validate = ({ username, email, password, name }) => {
  const errors = {};

  if (!username) {
    errors.username = "You need to input a username!";
  } else if (username.length < 3) {
    errors.username = "You need a longer username!";
  }

  if (!email) {
    errors.email = "You need to input a email!";
  }

  if (!password) {
    errors.password = "You need to input a password!";
  } else if (password.length < 7) {
    errors.password = "You need a longer password!";
  }

  if (!name) {
    errors.name = "you need to input a name!";
  } else if (name.length < 3) {
  }
  return errors;
};

function Login() {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "", name: "" }}
      validate={validate}
      render={props => {
        return (
          <div>
            <Form>
              <Field name="username" type="text" placeholder="Enter Username" />
              <ErrorMessage name="username" component="span" />
              <br />
              <Field name="password" type="text" placeholder="Enter password" />
              <ErrorMessage name="password" component="span" />
              <br />
              <button type="submit">Login</button>
            </Form>
          </div>
        );
      }}
    />
  );
}

export default Login;
