import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { updatePasswordStart } from "../../redux/user/user.actions";
import { Form, Input, Button } from "antd";
import showMessage from "../../utils/showMessage";
class UpdatePassword extends Component {
  onFinish = ({ passwordCurrent, password, passwordConfirm }) => {
    if (password !== passwordConfirm) {
      showMessage("error", "Mật khẩu không trùng khớp", 3, { top: 15 });
    } else {
      const { history } = this.props;
      this.props.updatePasswordStart({
        passwordCurrent,
        password,
        passwordConfirm,
        history,
      });
    }
  };
  render() {
    return (
      <div className="col-xl-9 col-md-8 col-sm-12">
        <div className="user-panel-body-right">
          <div id="mc" className="user-panel-tab-view mb-4">
            <div className="shadow-sm rounded overflow-hidden mb-3">
              <div className="p-4 bg-white">
                <h5 className="mb-0 text-gray-900">Cập nhật mật khẩu</h5>
              </div>
              <div className="nav nav-tabs">
                <p className="m-3">Thông tin mới về mật khẩu của bạn</p>
              </div>
            </div>
            <div>
              <div className="row">
                <div className="col-md-12">
                  <div className="bg-white p-4 shadow-sm border-radius">
                    {/* <form className="js-validate">
                                            <div className="row">
                                                
                                                <div className="col-sm-6">
                                                    <div className="js-form-message">
                                                        <label id="nameLabel" className="form-label">
                                                            Password
                        <span className="text-danger">*</span>
                                                        </label>
                                                        <div className="form-group">
                                                            <input type="password" className="form-control" name="password" placeholder="Password" aria-label="Nhập password" />
                                                        </div>
                                                    </div>
                                                </div>
                                              
                                            </div>
                                            <div className="row">
                                                
                                                <div className="col-sm-6">
                                                    <div className="js-form-message">
                                                        <label id="nameLabel" className="form-label">
                                                            Password mới
                        <span className="text-danger">*</span>
                                                        </label>
                                                        <div className="form-group">
                                                            <input type="password" className="form-control" name="newPassword" placeholder="Password mới" aria-label="Nhập password mới" />
                                                        </div>
                                                    </div>
                                                </div>
                                               
                                            </div>
                                            <div className="row">
                                           
                                                <div className="col-sm-6">
                                                    <div className="js-form-message">
                                                        <label id="nameLabel" className="form-label">
                                                            Xác nhận password
                        <span className="text-danger">*</span>
                                                        </label>
                                                        <div className="form-group">
                                                            <input type="password" className="form-control" name="newPasswordConfirm" placeholder="Xác nhận password" aria-label="Xác nhận password" />
                                                        </div>
                                                    </div>
                                                </div>
                                              
                                            </div>
                                        </form> */}
                    <Form
                      ref={this.formRef}
                      labelCol={{ span: 24 }}
                      name="basic"
                      onFinish={this.onFinish}
                      onFinishFailed={this.onFinishFailed}
                    >
                      <Form.Item
                        label="Nhập mật khẩu cũ"
                        name="passwordCurrent"
                        placeholder="Nhập mật khẩu cũ"
                        rules={[
                          {
                            required: true,
                            message: "Mật khẩu không hợp lệ",
                          },
                        ]}
                      >
                        <Input.Password placeholder="Password" />
                      </Form.Item>

                      <Form.Item
                        label="Nhập mật khẩu mới"
                        name="password"
                        placeholder="Nhập mật khẩu mới"
                        rules={[
                          {
                            required: true,
                            message: "Mật khẩu không hợp lệ",
                          },
                        ]}
                      >
                        <Input.Password placeholder="Password" />
                      </Form.Item>

                      <Form.Item
                        label="Nhập lại mật khẩu"
                        name="passwordConfirm"
                        placeholder="Nhập lại mật khẩu"
                        rules={[
                          {
                            required: true,
                            message: "Mật khẩu không hợp lệ",
                          },
                        ]}
                      >
                        <Input.Password placeholder="Password" />
                      </Form.Item>
                      <div className=" offset-xl-10 offset-lg-9 offset-md-8">
                        <Form.Item>
                          <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button mt-4"
                            block
                          >
                            Đặt lại mật khẩu
                          </Button>
                        </Form.Item>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  updatePasswordStart: (parrams) => dispatch(updatePasswordStart(parrams)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UpdatePassword)
);
