import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/home/index";
import Sobre from "../pages/sobre/index";
import Temap from "../pages/temap/index";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/sobre" component={Sobre} />
        <Route exact path="/temap" component={Temap} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
