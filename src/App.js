import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header.component";
import HomePage from "./pages/homepage/Hompage.component";
import LoginPage from "./pages/login/LoginPage.component";
import RegisterPage from "./pages/register/RegisterPage.component";

import "./App.css";
import "antd/dist/antd.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
        </Switch>
      </div>
    );
  }
}
