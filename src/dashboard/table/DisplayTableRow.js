import React from "react";
import TableCell from "@material-ui/core/TableCell";

const DisplayTableRow = ({ creditorName, loanAmount, monthlyFee, apr }) => {
  return (
    <>
      <TableCell component="th" scope="row">
        {creditorName}
      </TableCell>
      <TableCell>{loanAmount}</TableCell>
      <TableCell>{monthlyFee}</TableCell>
      <TableCell>{apr}</TableCell>
    </>
  );
};

export default DisplayTableRow;
