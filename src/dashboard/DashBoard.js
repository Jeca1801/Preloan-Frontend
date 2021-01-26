import React, { useState } from "react";
import CustomerForm from "./form/CustomerForm";
import { Container } from 'react-bootstrap';
import Table from "./table/Table";
import DisplayTable from "./table/DisplayTable";

const DashBoard = () => {
  const [tableRow, setTableRow] = useState([]);
  return (
    <>
      <Container>
        <CustomerForm setTableRow={setTableRow} tableRow={tableRow} />
      </Container>
      {/* <Table tableRow={tableRow} /> */}
      <DisplayTable/>
    </>
  );
};

export default DashBoard;
