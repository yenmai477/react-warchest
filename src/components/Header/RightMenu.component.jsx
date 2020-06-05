import React, { Component } from "react";
import { Menu } from "antd";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import UserSubMenu from "../user-submenu/UserSubMenu.component";

class RightMenu extends Component {
  render() {
    const { currentUser, mode, location } = this.props;
    if (currentUser) {
      return <UserSubMenu mode={mode} />;
    }

    return (
      <Menu mode={mode || "horizontal"} selectedKeys={[location.pathname]}>
        <Menu.Item key="/login">
          <Link to="/login">Đăng nhập</Link>
        </Menu.Item>
        <Menu.Item key="/register">
          <Link to="/register">Đăng ký</Link>
        </Menu.Item>
      </Menu>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RightMenu)
);
