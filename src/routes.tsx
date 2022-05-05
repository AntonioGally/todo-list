import { Route, HashRouter, Switch } from "react-router-dom";
import App from "./Templates/App/App";

const Router = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </HashRouter>
  );
};

export default Router;
