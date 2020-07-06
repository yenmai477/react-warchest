import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Component } from "react";
import { Avatar, Button } from "antd";
import { connect } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { signOut } from "../../redux/user/user.actions";
class SideBarProfile extends Component {
  render() {
    const { currentUser, history, signOut } = this.props;
    return (
      <div className="col-xl-3 col-sm-4">
        <div className="user-panel-body-left">
          <div className="bg-white rounded p-4 mb-4 text-center shadow-sm">
            <Avatar
              style={{
                backgroundColor: this.color,
                verticalAlign: "middle",
              }}
              size={"large"}
            >
              {currentUser.name[0]}
            </Avatar>
            <h6 className="text-black mb-2 text-gray-900 mt-3">
              {currentUser.name}
            </h6>
            <p className="m-0 mb-3">{currentUser.email}</p>
            <Button type="primary" onClick={() => signOut(history)}>
              <i className="icofont-logout" /> Đăng xuất
            </Button>
          </div>
          <div className="user-panel-sidebar-link mb-4 bg-white rounded shadow-sm overflow-hidden">
            <Link to={`/app/profile/edit-profile`}>
              <i className="icofont-user" /> Thông tin tài khoản
            </Link>
            <Link to={`/app/profile`}>
              <i className="icofont-bag" /> Sản phẩm của tôi
            </Link>
            <Link to={`/app/profile/update-password`}>
              <i className="icofont-ui-edit" /> Đổi mật khẩu
            </Link>
          </div>
        </div>
      </div>
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
  connect(mapStateToProps, mapDispatchToProps)(SideBarProfile)
);
