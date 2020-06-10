import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";

import Header from "../../../components/Header/Header.component";
import SearchProduct from "../../../components/SearchProduct/SearchProduct.component";
import Profile from "../Profile/Profile.component";
import SearchResult from "../../../components/best-price/search-result/SearchResult.component";
export default class Admin extends Component {
  render() {
    const { path } = this.props.match;
    return (
      <div>
        <Header />
        <Switch>
          <Route path={`${path}/profile`} component={Profile} />
          <Route path={`${path}/edit-profile`} component={SearchProduct} />
          <Route path={`${path}/search`} component={SearchResult} />
          <Route path={path} component={SearchProduct} />
        </Switch>
      </div>
    );
  }
}
