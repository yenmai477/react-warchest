import React, { Component } from "react";
import { Menu } from "antd";
import { Link, withRouter } from "react-router-dom";
class RightMenu extends Component {
  render() {
    return (
      <Menu
        mode={this.props.mode || "horizontal"}
        selectedKeys={[this.props.location.pathname]}
      >
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
export default withRouter(RightMenu);
