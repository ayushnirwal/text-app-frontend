import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Settings from "./pages/settings";
import ProtectedRoute from "./components/misc/ProtectedRoute";
import useUser from "./cutomHooks/useUser";

export default function App() {
  const { refresh } = useUser();
  useEffect(() => {
    refresh();
  }, []);
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
