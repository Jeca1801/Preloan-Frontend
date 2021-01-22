import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

const TableRowTotal = ({ tableRow }) => {
  const calculateTotalLoanAmount =
    tableRow.length > 0 &&
    tableRow
      .map((row) => row.loanAmount)
      .reduce((sum, val) => sum + parseInt(val), 0);

  const calculateTotalMonthFee =
    tableRow.length > 0 &&
    tableRow
      .map((row) => row.monthlyFee)
      .reduce((sum, val) => sum + parseInt(val), 0);

  const sumAprAndLoan =
    tableRow.length > 0 &&
    tableRow.reduce(
      (sum, val) => sum + (val["apr"] / 100) * val["loanAmount"],
      0
    );

  const calculateTotalApr =
    sumAprAndLoan && (sumAprAndLoan / calculateTotalLoanAmount) * 100;

  return (
    <>
      <Row>
        <Col>
          <h2>Total:</h2>
        </Col>
        <Col>
          <h2>Loan amount:</h2>
          <h3>{calculateTotalLoanAmount}</h3>
        </Col>
        <Col>
          <h2>Montly Fee:</h2>
          <h3>{calculateTotalMonthFee}</h3>
        </Col>
        <Col>
          <h2>APR:</h2>
          <h3>{calculateTotalApr && calculateTotalApr.toFixed(2)}</h3>
        </Col>
      </Row>
    </>
  );
};

export default TableRowTotal;
