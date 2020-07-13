import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";

import "./LoginPage.style.css";
import { emailSignInStart } from "../../redux/user/user.actions";
import { selectCurrentUser } from "../../redux/user/user.selector";

import { Redirect } from "react-router-dom";

class LoginPage extends Component {
  formRef = React.createRef();

  componentDidMount() {
    //  fetch api or get data
    // this.formRef.current.setFieldsValue({
    //   username: "Hello world!",
    //   password: "123456",
    // });
  }

  onFinish = (values) => {
    const { email, password } = values;
    this.props.emailSignInStart(email, password);
  };

  render() {
    if (this.props.currentUser) {
      const { from } = this.props.location.state || {
        from: { pathname: "/app" },
      };
      return <Redirect to={from} />;
    }
    return (
      <section>
        <div className="container-fluid pl-0 pr-0">
          <div className="row no-gutters">
            <div className="col-md-12 p-5 bg-image full-height vertical-center">
              <div className="container">
                <Link className="login-back" to="/">
                  <i class="icofont-arrow-left"></i>
                </Link>
                <div className="row">
                  <div className="offset-lg-1 col-lg-10">
                    <div className="card o-hidden border-0 shadow-lg my-5">
                      <div className="card-body p-0">
                        {/* Nested Row within Card Body */}
                        <div className="row">
                          <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>

                          <div className="col-lg-6">
                            <div className="p-5">
                              <div className="text-center">
                                <h1 className="h4 text-gray-900 mb-4">
                                  Đăng Nhập
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
                                  label="Email"
                                  name="email"
                                  placeholder="Email"
                                  rules={[
                                    {
                                      required: true,
                                      type: "email",
                                      message: "Email không hợp lệ",
                                    },
                                  ]}
                                >
                                  <Input placeholder="Username" />
                                </Form.Item>

                                <Form.Item
                                  label="Password"
                                  name="password"
                                  placeholder="password"
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
                                    Đăng nhập
                                  </Button>
                                </Form.Item>
                              </Form>
                              {/* <form className="user">
                            <div className="form-group">
                              <input
                                ref={this.formRef}
                                labelCol={{ span: 24 }}
                                name="basic"
                                onFinish={this.onFinish}
                                onFinishFailed={this.onFinishFailed}
                                type="email" className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Nhập email..." />
                            </div>
                            <div className="form-group">
                              <input type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Nhập mật khẩu" />
                            </div>
                            <div className="form-group">
                              <div className="custom-control custom-checkbox small">
                                <input type="checkbox" className="custom-control-input" id="customCheck" />
                                <label className="custom-control-label" htmlFor="customCheck">Ghi nhớ tài khoản</label>
                              </div>
                            </div>
                            <Link to="/app" className="btn btn-primary btn-user btn-block">
                              Đăng nhập
                            </Link>
                            <hr />
                            <Link to="/" className="btn btn-google btn-user btn-block">
                              <i className="fab fa-google " /> Đăng nhập với
                        Google
                      </Link>
                            <Link to="/" className="btn btn-facebook btn-user btn-block">
                              <i className="fab fa-facebook" /> Đăng nhập với
                        Facebook
                      </Link>
                          </form> */}
                              <hr />
                              <div className="text-center">
                                <Link className="small" to="/forgot-password">
                                  Quên mật khẩu?
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
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
