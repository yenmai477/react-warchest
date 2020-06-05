import React, { Component } from "react";
import { Menu } from "antd";
import { Link, withRouter } from "react-router-dom";

class LeftMenu extends Component {
  render() {
    const { mode, location } = this.props;
    return (
      <Menu mode={mode || "horizontal"} selectedKeys={[location.pathname]}>
        <Menu.Item key="/">
          <Link to="/app">Trang chủ</Link>
        </Menu.Item>
        <Menu.Item key="/app/profile">
          <Link to="/app/profile">Sản phẩm của tôi</Link>
        </Menu.Item>
        {/* <Menu.Item key="/about">
          <Link to="/about">Giới thiệu</Link>
        </Menu.Item> */}
      </Menu>
    );
  }
}
export default withRouter(LeftMenu);
