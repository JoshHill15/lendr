import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

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

const AddItems = () => {
  return (
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
          <div>
            <Form>
              <Field name="name" type="text" placeholder="Borrower / Lender" />
              <ErrorMessage name="name" component="span" />
              <br />
              <Field name="item" type="text" placeholder="Enter Item" />
              <ErrorMessage name="item" component="span" />
              <br />
              <Field name="borrowDate" type="date" placeholder="Borrow Date" />
              <ErrorMessage name="borrowDate" component="span" />
              <br />
              <Field name="dueDate" type="date" placeholder="Due Date" />
              <ErrorMessage name="dueDate" component="span" />
              <br />
              <button type="submit">Add Item</button>
              <button type="reset">Reset</button>
            </Form>
          </div>
        );
      }}
    />
  );
};

export default AddItems;
