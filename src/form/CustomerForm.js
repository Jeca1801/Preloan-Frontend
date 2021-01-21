import React, { useState } from "react";
import TextInput from "./TextInput";
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
  const [tableRow, setTableRow] = useState([]);
  const onFormSubmit = (values) => {
    setTableRow((row) => [...row, values]);
  };

  console.log(tableRow);
  //   const Table = ({ row }) => <li>{row}</li>;

  const renObjData = tableRow.map(function (col, idx) {
    return (
      <div key={idx}>
        <p>{col.creditorName}</p>
        <p>{col.loanAmount}</p>
        <p>{col.monthlyFee}</p>
        <p>{col.apr}</p>
      </div>
    );
  });

  return (
    <>
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
            <Button type="submit">Save!</Button>
          </Form>
        )}
      </Formik>
      {renObjData}
      {/* {tableRow.map((row, i) => (
           <Table
           row={row}
           key={row + i}
         />
      ))} */}
    </>
  );
};

export default CustomerForm;
