import React from "react";
import { Route, HashRouter, Switch } from "react-router-dom";

import Main from "./pages/Main";

const Router = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </HashRouter>
  );
};

export default Router;
