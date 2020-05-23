import React, { Component } from "react";
import { Menu } from "antd";
import { Link, withRouter } from "react-router-dom";

class LeftMenu extends Component {
  render() {
    return (
      <Menu
        mode={this.props.mode || "horizontal"}
        selectedKeys={[this.props.location.pathname]}
      >
        <Menu.Item key="/">
          <Link to="/">Trang chủ</Link>
        </Menu.Item>
        <Menu.Item key="/users/products">
          <Link to="/users/products">Sản phẩm của tôi</Link>
        </Menu.Item>
        <Menu.Item key="/about">
          <Link to="/about">Giới thiệu</Link>
        </Menu.Item>
      </Menu>
    );
  }
}
export default withRouter(LeftMenu);
