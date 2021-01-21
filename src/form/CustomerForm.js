import React, { useState } from "react";
import TableRow from "./TableRow";
import TextInput from "./TextInput";
import { Form, Button, Row, Col } from "react-bootstrap";
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

  const renderTable = tableRow.map(function (row, idx) {
    return (
      <Row key={idx}>
          <TableRow
            creditorName={row.creditorName}
            loanAmount={row.loanAmount}
            monthlyFee={row.monthlyFee}
            apr={row.apr}
          />
      </Row>
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
      {renderTable}
    </>
  );
};

export default CustomerForm;
