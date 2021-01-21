import React from "react";
import TextInput from './TextInput';
import { Form, Button } from "react-bootstrap";
import * as yup from "yup";
import { Formik } from "formik";

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
  loanAmount: "",
  monthlyFee: "",
  apr: "",
};

const CustomerForm = () => {

  const onFormSubmit = (values) => {
      console.log(values)
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
        <Form onSubmit={handleSubmit}>
          <TextInput
            type="text"
            name="creditorName"
            values={values}
            errors={errors}
            touched={touched}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          <TextInput
            type="text"
            name="loanAmount"
            label="Description"
            values={values}
            errors={errors}
            touched={touched}
            handleChange={handleChange}
            handleBlur={handleBlur}
            textarea="textarea"
          />
          <TextInput
            type="text"
            name="monthlyFee"
            label="Price (in SEK)"
            values={values}
            errors={errors}
            touched={touched}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
           <TextInput
            type="text"
            name="apr"
            label="Price (in SEK)"
            values={values}
            errors={errors}
            touched={touched}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          <pre>{JSON.stringify(values, null, 2)}</pre>
          <Button type="submit">Save!</Button>
        </Form>
      )}
    </Formik>
  );
};

export default CustomerForm;
