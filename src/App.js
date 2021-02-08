import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import { PrivateRoute } from "./components/PrivateRoute";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <PrivateRoute path="/TodoList/" component={TodoList} />
      </Switch>
    </Router>
  );
}
