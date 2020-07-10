import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "../../../components/Header/Header.component";
import SearchProduct from "../../../components/SearchProduct/SearchProduct.component";
import Profile from "../../../components/Profile/Profile.jsx";
import SearchResult from "../../../components/search-result/SearchResult.component";
import ProductDetail from "../../../components/product-detail/ProductDetail.component";
import { selectCurrentUser } from "../../../redux/user/user.selector";
import { connect } from "react-redux";
class HomePage extends Component {
  render() {
    const { path } = this.props.match;
    return (
      <div>
        <Header />
        <Switch>
          <Route path={`${path}/profile`} component={Profile} />
          <Route path={`${path}/search`} component={SearchResult} />
          <Route path={`${path}/products/:id`} component={ProductDetail} />
          <Route path={path} component={SearchProduct} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  error: state.user.error,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
