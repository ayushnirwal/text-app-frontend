import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Settings from "./pages/settings";
import ProtectedRoute from "./components/misc/ProtectedRoute";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/settings" component={Settings} />
        <ProtectedRoute exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}
