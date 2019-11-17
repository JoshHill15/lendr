import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const validate = ({ username, email, password, name, checkPassword }) => {
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
  }
  if (password !== checkPassword) {
    errors.checkPassword = "your passwords need to match";
  }
  return errors;
};

function OnBoarding() {
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
          <div>
            <Form>
              <Field name="name" type="text" placeholder="Enter Your Name" />
              <ErrorMessage name="name" component="span" />
              <br />
              <Field name="username" type="text" placeholder="Enter Username" />
              <ErrorMessage name="username" component="span" />
              <br />
              <Field name="email" type="email" placeholder="Enter Email" />
              <ErrorMessage name="email" component="span" />
              <br />
              <Field
                name="password"
                type="password"
                placeholder="Enter password"
              />
              <ErrorMessage name="password" component="span" />
              <br />
              <Field
                name="checkPassword"
                type="password"
                placeholder="Check password"
              />
              <ErrorMessage name="checkPassword" component="span" />
              <br />
              <button type="submit">Sign Up</button>
              <button type="reset">Reset</button>
            </Form>
          </div>
        );
      }}
    />
  );
}

export default OnBoarding;
