import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Projects from "./components/pages/projects";
import NotFound from "./components/pages/not-found";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/projects" component={Projects}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect from="/" exact to="/projects" />
          <Redirect to="/not-found" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
