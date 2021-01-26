import React from "react";
import { Form, Col } from "react-bootstrap";
import { checkInputField, inputBorderColor } from "./inputUtils.js";

const TextInput = (props) => {
  const {
    type,
    label,
    name,
    handleChange,
    handleBlur,
    errors,
    touched,
    values,
    textarea,
  } = props;
  return (
    <Col xs={12}>
      <Form.Group>
        <Form.Label>{label}</Form.Label>
        <Form.Control
          type={type}
          name={name}
          value={values[name]}
          onChange={handleChange}
          onBlur={handleBlur}
          style={inputBorderColor(errors, touched, values, name)}
          as={textarea}
        ></Form.Control>
        {checkInputField(errors, touched, name)}
      </Form.Group>
    </Col>
  );
};

export default TextInput;
