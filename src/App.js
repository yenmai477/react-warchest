import React, { Component, Profiler } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage/LandingPage'
import LoginPage from "./pages/login/LoginPage.component";
import RegisterPage from "./pages/register/RegisterPage.component";
import ForgotPasword from "./pages/forgotPassword/ForgotPassword.component";
import ResetPasword from "./pages/forgotPassword/ResetPassword.component";
import HomePage from './pages/admin/HomePage/HomePage.component'
import Profile from './pages/admin/Profile/Profile.component'
import EditProfile from './pages/admin/Profile/EditProfile'

import "antd/dist/antd.css";
import { checkUserSession } from "./redux/user/user.actions";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selector";

class App extends Component {
  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/profile" component={Profile} />
          <Route path="/edit-profile" component={EditProfile} />
          <Route path="/app" component={HomePage} />
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
