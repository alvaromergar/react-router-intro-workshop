import React from "react";
import { Route, Switch } from "react-router";

import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/profile" component={Profile} />
        <Route path="/about" component={About} />
        <Route exact path="/" component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
