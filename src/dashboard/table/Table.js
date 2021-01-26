import React, { useEffect, useContext } from "react";
import TableRow from "./TableRow";
import { CustomerContext } from "../../context/CustomerContext";
import TableRowTotal from "./TableRowTotal";
import { Row } from "react-bootstrap";

const Table = () => {
  const { preLoan } = useContext(CustomerContext);
  const renderTable =
    preLoan.length > 0 &&
    preLoan.map(function (
      row,
      idx
    ) {
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
      {renderTable}
      <hr />
      <TableRowTotal tableRow={preLoan} />
    </>
  );
};

export default Table;
