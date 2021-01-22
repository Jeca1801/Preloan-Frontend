import React from "react";
import TableRow from "./TableRow";
import TableRowTotal from "./TableRowTotal";
import { Row } from 'react-bootstrap';

const Table = ({ tableRow }) => {

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
      {renderTable}
      <hr />
      <TableRowTotal tableRow={tableRow} />
    </>
  );
};

export default Table;
