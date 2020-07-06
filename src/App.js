import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/login/LoginPage.component";
import RegisterPage from "./pages/register/RegisterPage.component";
import ForgotPasword from "./pages/forgotPassword/ForgotPassword.component";
import ResetPasword from "./pages/forgotPassword/ResetPassword.component";
import HomePage from "./pages/admin/HomePage/HomePage.component";

import "antd/dist/antd.css";
import "react-icofont";
import { checkUserSession } from "./redux/user/user.actions";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selector";

class App extends Component {
  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  render() {
    const { currentUser } = this.props;

    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route
            path="/app"
            render={(props) =>
              !currentUser ? (
                <Redirect
                  to={{ pathname: "/login", state: { from: props.location } }}
                />
              ) : (
                <HomePage {...props} />
              )
            }
          />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/forgot-password" component={ForgotPasword} />
          <Route path="/reset-password/:token" component={ResetPasword} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
