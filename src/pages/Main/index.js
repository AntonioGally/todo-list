import React from "react";
//Provider
import DataContextProvider from "../../context/dataContext.js";
//Component
import App from "./app.js";

const Main = () => {
  return (
    <>
      <DataContextProvider>
        <App />
      </DataContextProvider>
    </>
  );
};

export default Main;
