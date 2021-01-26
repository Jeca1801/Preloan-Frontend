import React, { useContext } from "react";
import DisplayTableRow from "./DisplayTableRow";
import DisplayTableRowTotal from "./DisplayTableRowTotal";
import { CustomerContext } from "../../context/CustomerContext";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
const DisplayTable = () => {
  const classes = useStyles();
  const { preLoan } = useContext(CustomerContext);
  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Creditor name</TableCell>
              <TableCell>Loan amount</TableCell>
              <TableCell>Montly fee</TableCell>
              <TableCell>Apr</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {preLoan.map((row, index) => (
              <TableRow key={index}>
                <DisplayTableRow
                  creditorName={row.creditorName}
                  loanAmount={row.loanAmount}
                  monthlyFee={row.monthlyFee}
                  apr={row.apr}
                />
              </TableRow>
            ))}
            <DisplayTableRowTotal />
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default DisplayTable;
