import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Form, Input, Button } from "antd";
import { forgotPasswordStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';
class ForgotPassword extends Component {
    onFinish = (values) => {
        const { email } = values;
        this.props.forgotPasswordStart(email)
    }
    render() {
        return (
            <div>
                <section className>
                    <div className="container-fluid pl-0 pr-0">
                        <div className="row no-gutters">
                            <div className="col-md-12 p-5 bg-white full-height vertical-center">
                                <div className="container">
                                    <Link className="login-back" to="/"><i className="fa fa-arrow-left" aria-hidden="true" /></Link>
                                    <div className="card o-hidden border-0 shadow-lg my-5">
                                        <div className="card-body p-0">
                                            {/* Nested Row within Card Body */}
                                            <div className="row">
                                                <div className="col-lg-6 d-none d-lg-block bg-password-image" ></div>
                                                <div className="col-lg-6">
                                                    <div className="p-5">
                                                        <div className="text-center">
                                                            <h1 className="h4 text-gray-900 mb-4">Quên mật khẩu</h1>
                                                        </div>
                                                        <Form
                                                            onFinish={this.onFinish}>
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
                                                                <Input placeholder="Email" />
                                                            </Form.Item>
                                                            <Form.Item>
                                                                <Button

                                                                    type="primary"
                                                                    htmlType="submit"
                                                                    className="login-form-button "
                                                                    block
                                                                > Đặt lại mật khẩu</Button>
                                                            </Form.Item>
                                                        </Form>



                                                        <div className="text-center">
                                                            <h6 className="small" to>Đã có tài khoản?</h6>
                                                        </div>
                                                        <div className="text-center">
                                                            <Link className="small" to="/login">Đăng nhập</Link>
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
            </div>

        )
    }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
    forgotPasswordStart: (email) =>
        dispatch(forgotPasswordStart({ email })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);