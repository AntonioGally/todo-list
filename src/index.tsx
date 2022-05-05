import React from "react";
import ReactDOM from "react-dom";
// Components
import Route from "./routes";
//CSS
import './styles/globalStyles.css';
import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/antd.css';

ReactDOM.render(
  <React.StrictMode>
    <Route />
  </React.StrictMode>,
  document.getElementById("root")
);
