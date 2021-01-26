import React, { useState } from "react";
import CustomerForm from "./form/CustomerForm";
import { Container } from 'react-bootstrap';
import DisplayTable from "./table/DisplayTable";

const DashBoard = () => {
  const [tableRow, setTableRow] = useState([]);
  return (
    <>
      <Container>
        <CustomerForm setTableRow={setTableRow} tableRow={tableRow} />
      </Container>
      <DisplayTable/>
    </>
  );
};

export default DashBoard;
