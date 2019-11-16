import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const validate = ({ name, email, password }) => {
    
  const errors = {};

  if (!name) {
    errors.name = "You need to input a name!";
  } else if (name.length < 3) {
    errors.name = "You need a longer name!";
  }

  if (!email) {
    errors.email = "You need to input a email!";
  }

  if (!password) {
    errors.password = "You need to input a password!";
  } else if (password.length < 7) {
    errors.password = "You need a longer password!";
  }

  return errors;
};

function OnBoarding() {

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validate={validate}
      render={props => {
        return (
          <div>
            <h1>Welcome to Lendr!</h1>
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

export default OnBoarding;
