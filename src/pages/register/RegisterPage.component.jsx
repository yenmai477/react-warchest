import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";

import { emailSignInStart } from "../../redux/user/user.actions";
import { selectCurrentUser } from "../../redux/user/user.selector";

import { Redirect } from "react-router-dom";
class RegisterPage extends Component {
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
    console.log(this.props.currentUser);
    if (this.props.currentUser) {
      return <Redirect to="/" />;
    }
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
                      <div className="col-lg-6 d-none d-lg-block bg-register-image"></div>
                      <div className="col-lg-6">
                        <div className="p-5">
                          <div className="text-center">
                            <h1 className="h4 text-gray-900 mb-4">Đăng Ký</h1>
                          </div>
                          <Form
                            ref={this.formRef}
                            labelCol={{ span: 24 }}
                            name="basic"
                            onFinish={this.onFinish}
                            onFinishFailed={this.onFinishFailed}
                          >
                            <Form.Item
                              labelCol={{ span: 24 }}
                              label="Nhập email"
                              name="email"
                              placeholder="Nhập email"
                              className="login-form"
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
                              label="Nhập mật khẩu"
                              name="password"
                              placeholder="Nhập mật khẩu"
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
                              name="password"
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
                              >
                                Đăng ký
                              </Button>
                            </Form.Item>
                          </Form>
                          {/* <form className="user">
                            <div className="form-group">
                              <input type="text" className="form-control form-control-user" id placeholder="Nhập họ tên..." />
                            </div>
                            <div className="form-group">
                              <input type="email" className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Nhập email..." />
                            </div>
                            <div className="form-group">
                              <input type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Nhập mật khẩu" />
                            </div>
                            <div className="form-group">
                              <input type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Nhập lại mật khẩu" />
                            </div>
                            <div className="form-group">
                              <div className="custom-control custom-checkbox small">
                                <input type="checkbox" className="custom-control-input" id="customCheck" />
                                <label className="custom-control-label" htmlFor="customCheck">Tôi đồng ý với các
                              <Link to=""> Điều khoản </Link>
                              &
                              <Link to=""> Chính sách</Link> của War Chest
                            </label>
                              </div>
                            </div>
                            <Link to="/" className="btn btn-primary btn-user btn-block">
                              Đăng ký
                        </Link>
                          </form> */}
                          <hr />
                          <div className="text-center">
                            <h6 className="small" to>
                              Đã có tài khoản?
                            </h6>
                          </div>
                          <div className="text-center">
                            <Link className="small" to="/login">
                              Đăng nhập
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

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
