import React, { useContext } from "react";
import { CustomerContext } from "../../context/CustomerContext";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const DisplayTableRowTotal = () => {
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
      <TableRow>
        <TableCell component="th" scope="row">
          <h4>Total:</h4>
        </TableCell>
        <TableCell>
          <h5>{calculateTotalLoanAmount}</h5>
        </TableCell>
        <TableCell>
          <h5>{calculateTotalMonthFee}</h5>
        </TableCell>
        <TableCell>
          <h5>{calculateTotalApr && calculateTotalApr.toFixed(2)}</h5>
        </TableCell>
      </TableRow>
    </>
  );
};

export default DisplayTableRowTotal;
