import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { connect } from "react-redux";
import { resetPasswordStart } from "../../redux/user/user.actions";

class ResetPassword extends Component {
  componentDidMount() {
    console.log(this.props.match.params);
  }
  onFinish = ({ password, passwordConfirm }) => {
    const token = this.props.match.params.token;
    console.log(token);
    if (password !== passwordConfirm) {
      alert("password does not matched");
    } else {
      const { history } = this.props;
      this.props.resetPasswordStart({
        password,
        passwordConfirm,
        token,
        history,
      });
    }
  };

  render() {
    return (
      <section className>
        <div className="container-fluid pl-0 pr-0">
          <div className="row no-gutters">
            <div className="col-md-12 p-5 bg-white full-height vertical-center">
              <div className="container">
                <Link className="login-back" to="/">
                  <i className="fa fa-arrow-left" />
                </Link>
                <div className="card o-hidden border-0 shadow-lg my-5">
                  <div className="card-body p-0">
                    {/* Nested Row within Card Body */}
                    <div className="row">
                      <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>

                      <div className="col-lg-6">
                        <div className="p-5">
                          <div className="text-center">
                            <h1 className="h4 text-gray-900 mb-4">
                              Đặt lại mật khẩu
                            </h1>
                          </div>
                          <Form
                            ref={this.formRef}
                            labelCol={{ span: 24 }}
                            name="basic"
                            onFinish={this.onFinish}
                            onFinishFailed={this.onFinishFailed}
                          >
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
                          </Form>

                          <hr />
                          <div className="text-center">
                            <Link className="small" to="/login">
                              Đăng nhập
                            </Link>
                          </div>
                          <div className="text-center">
                            <Link className="small" to="/register">
                              Đăng ký
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  resetPasswordStart: (parrams) => dispatch(resetPasswordStart(parrams)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ResetPassword)
);
