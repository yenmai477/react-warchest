import React, { Component } from "react";
import { connect } from "react-redux";
import { UserOutlined, LoginOutlined } from "@ant-design/icons";
import { Menu, Space, Avatar } from "antd";
import Text from "antd/lib/typography/Text";
import SubMenu from "antd/lib/menu/SubMenu";
import { Link, withRouter } from "react-router-dom";
import { signOut } from "../../redux/user/user.actions";
import { selectCurrentUser } from "../../redux/user/user.selector";

class UserSubMenu extends Component {
  colorList = ["#f56a00", "#7265e6", "#ffbf00", "#00a2ae"];
  color = this.colorList[Math.floor(Math.random() * this.colorList.length)];

  render() {
    const { currentUser, mode, signOut, location, history } = this.props;
    return (
      <Menu
        mode={mode || "horizontal"}
        selectedKeys={mode ? [location.pathname] : ""}
      >
        <SubMenu
          title={
            <Space>
              <Avatar
                style={{
                  backgroundColor: this.color,
                  verticalAlign: "middle",
                }}
                size={mode ? "" : "large"}
              >
                {currentUser.name[0]}
              </Avatar>
              <Text type="secondary">{currentUser.name}</Text>
            </Space>
          }
        >
          <Menu.Item key="/app/profile" icon={<UserOutlined />}>
            <Link to="/app/profile">Tài khoản</Link>
          </Menu.Item>
          <Menu.Item icon={<LoginOutlined />} onClick={() => signOut(history)}>
            Đăng xuất
          </Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  signOut: (history) => dispatch(signOut(history)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UserSubMenu)
);
