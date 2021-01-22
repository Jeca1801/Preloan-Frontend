import React, { useEffect } from "react";
import TextInput from "./TextInput";
import { Form, Button, Row } from "react-bootstrap";
import * as yup from "yup";
import { Formik } from "formik";
import "./CustomerForm.css";

const newSchema = yup.object().shape({
  creditorName: yup.string().required("Enter a creditor name"),
  loanAmount: yup
    .number()
    .typeError("Enter a number")
    .required("Enter a loan amount"),
  monthlyFee: yup
    .number()
    .typeError("Enter a number")
    .required("Enter a monthly fee"),
  apr: yup.number().typeError("Enter a number").required("Enter a APR"),
});

const initialValues = {
  creditorName: "",
  loanAmount: 0,
  monthlyFee: 0,
  apr: 0,
};

const CustomerForm = ({ setTableRow, tableRow }) => {
  const onFormSubmit = (values) => {
    setTableRow((row) => [...row, values]);
    if (localStorage.getItem("preExistingLoan") === null) {
      localStorage.setItem("preExistingLoan", []);
    }
  };

  useEffect(() => {
        localStorage.setItem("preExistingLoan", JSON.stringify(tableRow));
  }, [tableRow]);

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={newSchema}
        onSubmit={(values) => {
          onFormSubmit(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          handleBlur,
        }) => (
          <Form className="form-wrapper" onSubmit={handleSubmit}>
            <TextInput
              type="text"
              name="creditorName"
              label="Creditor name"
              values={values}
              errors={errors}
              touched={touched}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
            <TextInput
              type="text"
              name="loanAmount"
              label="Loan amount(SEK)"
              values={values}
              errors={errors}
              touched={touched}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
            <TextInput
              type="text"
              name="monthlyFee"
              label="Monthly fee(SEK)"
              values={values}
              errors={errors}
              touched={touched}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
            <TextInput
              type="text"
              name="apr"
              label="Add APR"
              values={values}
              errors={errors}
              touched={touched}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
            <Button type="submit">Save</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CustomerForm;
