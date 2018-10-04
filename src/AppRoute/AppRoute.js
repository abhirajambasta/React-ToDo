import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import DynamicComponentLoader from "./DynamicComponentLoader";

const DynamicAddNew = DynamicComponentLoader( () => import("./../components/templates/AddNew"));
const DynamicCompleted = DynamicComponentLoader( () => import("./../components/templates/Completed"));
const DynamicHome = DynamicComponentLoader( () => import("./../components/templates/Home"));
const DynamicPending = DynamicComponentLoader( () => import("./../components/templates/Pending"));


const AppRoute = props => (
  <Router>
    <Switch>
      <Route exact={true} path="/" render={() => <DynamicHome {...Object.assign({}, props)} />} />
      <Route path="/addNew" render={() => <DynamicAddNew {...Object.assign({}, props)} />} />
      <Route path="/completed" render={() => <DynamicCompleted {...Object.assign({}, props)} />} />
      <Route path="/pending" render={() => <DynamicPending {...Object.assign({}, props)} />} />
	</Switch>
  </Router>
);

export default AppRoute;
