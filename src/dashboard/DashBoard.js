import React, { useState } from "react";
import CustomerForm from "./form/CustomerForm";
import DisplayTable from "./table/DisplayTable";
import { Container } from "react-bootstrap";
import './DashBoard.css';

const DashBoard = () => {
  const [tableRow, setTableRow] = useState([]);
  return (
    <Container className="dashboard-wrapper">
      <CustomerForm setTableRow={setTableRow} tableRow={tableRow} />
      <DisplayTable />
    </Container>
  );
};

export default DashBoard;
