import React, { useRef, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styled from "styled-components";
import "../../App.js";
import { gsap } from "gsap";
import Header from "../Header.js";
const validate = ({ name, item, borrowDate, dueDate }) => {
  const errors = {};

  if (!name) {
    errors.name = "you need to input a name!";
  }

  if (!item) {
    errors.item = "You need to input a item!";
  }

  if (!borrowDate) {
    errors.borrowDate = "You need to input a valid date";
  }

  if (!dueDate) {
    errors.dueDate = "You need to input a valid date";
  }

  return errors;
};
const Splash = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(63, 94, 251);
  background: linear-gradient(
    90deg,
    rgba(63, 94, 251, 1) 32%,
    rgba(70, 250, 252, 1) 100%
  );
  height: 100vh;
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
  background: rgba(153, 50, 204, 0.7);
`;

const Button = styled.button`
  border: none;
  border-radius: 4px;
  margin: 2%;
  padding: 10px 25px;
  box-shadow: 10px 10px 28px -12px rgba(0, 0, 0, 0.75);
`;

const LargeContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1%;
`;

const AddItems = () => {
  useEffect(() => {
    gsap.to(FormRef, {
      duration: 3,
      scale: 1.3,
      ease: "bounce",
      ease: "back"
    });
  }, []);

  let FormRef = useRef(null);
  return (
    <>
      <Header />
      <Formik
        initialValues={{
          name: "",
          item: "",
          borrowDate: "",
          dueDate: ""
        }}
        validate={validate}
        render={props => {
          return (
            <Splash>
              <LargeContainer>
                <SignUpContainer ref={e => (FormRef = e)}>
                  <Form>
                    <Field
                      name="name"
                      type="text"
                      placeholder="Borrower / Lender"
                    />
                    <ErrorMessage
                      className="error"
                      name="name"
                      component="span"
                    />
                    <Field name="item" type="text" placeholder="Enter Item" />
                    <ErrorMessage
                      className="error"
                      name="item"
                      component="span"
                    />
                    <label name="lend">lend:</label>
                    <Field name="lend" type="checkbox" />
                    <label name="borrow">borrow:</label>
                    <Field name="borrow" type="checkbox" />
                    <Field
                      name="borrowDate"
                      type="date"
                      placeholder="Borrow Date"
                    />
                    <ErrorMessage
                      className="error"
                      name="borrowDate"
                      component="span"
                    />
                    <Field name="dueDate" type="date" placeholder="Due Date" />
                    <ErrorMessage
                      className="error"
                      name="dueDate"
                      component="span"
                    />
                    <Button type="submit">Add Item</Button>
                    <Button type="reset">Reset</Button>
                  </Form>
                </SignUpContainer>
              </LargeContainer>
            </Splash>
          );
        }}
      />
    </>
  );
};

export default AddItems;
