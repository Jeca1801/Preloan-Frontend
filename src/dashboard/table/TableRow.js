import React from "react";
import { Col } from "react-bootstrap";

const TableRow = ({ creditorName, loanAmount, monthlyFee, apr }) => {
  return (
    <>
      <Col>
        <h2>Creditor Name:</h2>
        <h3>{creditorName}</h3>
      </Col>
      <Col>
        <h2>Loan amount:</h2>
        <h3>{loanAmount}</h3>
      </Col>
      <Col>
        <h2>Montly Fee:</h2>
        <h3>{monthlyFee}</h3>
      </Col>
      <Col>
        <h2>Apr:</h2>
        <h3>{apr}</h3>
      </Col>
    </>
  );
};

export default TableRow;
