import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Counter } from "./pages/Counter";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Counter />
        </Route>
      </Switch>
    </Router>
  );
}
