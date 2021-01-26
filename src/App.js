import React from "react";
import DashBoard from "./dashboard/DashBoard";
import CustomerContextProvider from "./context/CustomerContext";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <CustomerContextProvider>
        <DashBoard />
      </CustomerContextProvider>
    </div>
  );
};

export default App;
