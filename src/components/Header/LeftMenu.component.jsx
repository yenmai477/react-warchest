import React, { Component } from "react";
import { Menu } from "antd";
import { Link, withRouter } from "react-router-dom";

class LeftMenu extends Component {
  render() {
    const { mode, location } = this.props;
    return (
      <Menu mode={mode || "horizontal"} selectedKeys={[location.pathname]}>
        <Menu.Item key="/">
          <Link to="/">Trang chủ</Link>
        </Menu.Item>
        <Menu.Item key="/products">
          <Link to="/products">Sản phẩm</Link>
        </Menu.Item>
        <Menu.Item key="/about">
          <Link to="/about">Giới thiệu</Link>
        </Menu.Item>
      </Menu>
    );
  }
}
export default withRouter(LeftMenu);
