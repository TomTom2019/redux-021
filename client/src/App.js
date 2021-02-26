import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/header";
import Home from "./components/home";
import Article from "./components/article";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/article" component={Article}></Route>
          <Route path="/" component={Home} exact></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
