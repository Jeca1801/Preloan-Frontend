import React, { useState } from "react";
import CustomerForm from "./form/CustomerForm";
import Table from "./table/Table";

const DashBoard = () => {
  const [tableRow, setTableRow] = useState([]);
  return (
    <div>
      <CustomerForm setTableRow={setTableRow} tableRow={tableRow}/>
      <Table tableRow={tableRow} />
    </div>
  );
};

export default DashBoard;
