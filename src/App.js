import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/login/LoginPage.component";
import RegisterPage from "./pages/register/RegisterPage.component";
import ForgotPasword from "./pages/forgotPassword/ForgotPassword.component";
import ResetPasword from "./pages/forgotPassword/ResetPassword.component";
import HomePage from "./pages/admin/HomePage/HomePage.component";

import { checkUserSession } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selector";

import usePushNotifications from "./usePushNotifications";

import "antd/dist/antd.css";
import "react-icofont";
import "./index.css";
import { notification } from "antd";

class App extends Component {
  componentDidMount() {
    const {
      checkUserSession,
      pushNotificationSupported,
      userConsent,
    } = this.props;
    const isConsentGranted =
      userConsent === "granted" || userConsent === "denied";
    checkUserSession();
    if (pushNotificationSupported && !isConsentGranted) {
      this.openNotification();
    }
  }

  openNotification = () => {
    const {
      onClickAskUserPermission,
      onClickSusbribeToPushNotification,
    } = this.props;
    notification.info({
      message: `Chào bạn!`,
      description:
        "Warchest muốn sự cho phép của bạn để kích hoạt thông báo đẩy",
      placement: "bottomRight",
      duration: 200,
      style: { cursor: "pointer" },
      onClick: () => {
        onClickAskUserPermission();
        onClickSusbribeToPushNotification();
        setTimeout(() => notification.destroy(), 500);
      },
    });
  };

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

const withHookApp = (Component) => {
  return (props) => {
    const {
      pushNotificationSupported,
      userConsent,
      onClickAskUserPermission,
      onClickSusbribeToPushNotification,
    } = usePushNotifications();
    return (
      <Component
        onClickAskUserPermission={onClickAskUserPermission}
        onClickSusbribeToPushNotification={onClickSusbribeToPushNotification}
        pushNotificationSupported={pushNotificationSupported}
        userConsent={userConsent}
        {...props}
      />
    );
  };
};
const ReduxApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default withHookApp(ReduxApp);
