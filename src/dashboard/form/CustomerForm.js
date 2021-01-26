import React, { useContext } from "react";
import TextInput from "./TextInput";
import { CustomerContext } from "../../context/CustomerContext";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
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

const CustomerForm = ({ setTableRow }) => {
  const { dispatch } = useContext(CustomerContext);
  const onFormSubmit = (values) => {
    setTableRow((row) => [...row, values]);
    dispatch({
      type: "ADD_PRE_LOAN",
      preLoan: {
        creditorName: values.creditorName,
        loanAmount: values.loanAmount,
        monthlyFee: values.monthlyFee,
        apr: values.apr,
      },
    });
  };

  return (
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
        <Container className="form-wrapper">
          <Form onSubmit={handleSubmit}>
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
            <Col className="button-wrapper">
              <Button type="submit" variant="success" size="lg">
                Save
              </Button>
            </Col>
          </Form>
        </Container>
      )}
    </Formik>
  );
};

export default CustomerForm;
