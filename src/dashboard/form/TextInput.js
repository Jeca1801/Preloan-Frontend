import React from "react";
import { Form, Row, Col } from "react-bootstrap";
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
    <Form.Group as={Row}>
      <Form.Label className="pl-3"sm="2">{label}</Form.Label>
      <Col xs={12}>
        <Form.Control
          type={type}
          name={name}
          value={values[name]}
          onChange={handleChange}
          onBlur={handleBlur}
          style={inputBorderColor(errors, touched, values, name)}
          as={textarea}
        ></Form.Control>
      </Col>

      {checkInputField(errors, touched, name)}
    </Form.Group>
  );
};

export default TextInput;
