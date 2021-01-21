import React from "react";
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
            name="name"
            label="Meal name"
            values={values}
            errors={errors}
            touched={touched}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          <TextInput
            type="text"
            name="description"
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
            name="price"
            label="Price (in SEK)"
            values={values}
            errors={errors}
            touched={touched}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          <MealInstructionsInput values={values} />
          <MealIngredientInput values={values} />
          <pre>{JSON.stringify(values, null, 2)}</pre>
          <Button type="submit">Add Meal!</Button>
        </Form>
      )}
    </Formik>
  );
};

export default CustomerForm;
