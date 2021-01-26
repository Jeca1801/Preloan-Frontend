import React, { useContext } from "react";
import { CustomerContext } from "../../context/CustomerContext";
import { Col, Row } from "react-bootstrap";

const TableRowTotal = () => {
  const { preLoan } = useContext(CustomerContext);

  const calculateTotalLoanAmount =
    preLoan.length > 0 &&
    preLoan
      .map((row) => row.loanAmount)
      .reduce((sum, val) => sum + parseInt(val), 0);

  const calculateTotalMonthFee =
    preLoan.length > 0 &&
    preLoan
      .map((row) => row.monthlyFee)
      .reduce((sum, val) => sum + parseInt(val), 0);

  const sumAprAndLoan =
    preLoan.length > 0 &&
    preLoan.reduce(
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
