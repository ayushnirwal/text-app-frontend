import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./components/misc/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Settings from "./pages/settings";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/login" component={Login} />
        <ProtectedRoute exact={true} path="/settings" component={Settings} />
        <ProtectedRoute exact={true} path="/" component={Home} />
      </Switch>
    </Router>
  );
}
