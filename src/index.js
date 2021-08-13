import React from "react";
import ReactDOM from "react-dom";
// Components
import Route from "./routes";
//CSS
import GlobalStyles from "./styles/globalStyles";
import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/antd.css';
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Route />
  </React.StrictMode>,
  document.getElementById("root")
);
