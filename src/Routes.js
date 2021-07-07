import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Results, Trivia } from "./containers";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/trivia">
          <Trivia />
        </Route>

        <Route exact path="/results">
          <Results />
        </Route>
        {/* Create a Not found component */}
      </Switch>
    </Router>
  );
}
