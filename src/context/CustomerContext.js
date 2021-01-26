import React, { createContext, useReducer, useEffect } from "react";
import { bookReducer } from "../reducers/bookReducer";

export const CustomerContext = createContext();

const CustomerContextProvider = (props) => {
  const [preLoan, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem("preLoan");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("preLoan", JSON.stringify(preLoan));
  }, [preLoan]);

  return (
    <CustomerContext.Provider value={{ preLoan, dispatch }}>
      {props.children}
    </CustomerContext.Provider>
  );
};

export default CustomerContextProvider;
