import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Input, Button } from "antd";

import "./LoginPage.style.css";
import { emailSignInStart } from "../../redux/user/user.actions";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { Redirect } from "react-router-dom";

export class LoginPage extends Component {
  formRef = React.createRef();

  componentDidMount() {
    // //  fetch api or get data
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
      <div className="offset-md-4 col-md-4">
        <Form
          ref={this.formRef}
          labelCol={{ span: 24 }}
          name="basic"
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Form.Item
            labelCol={{ span: 24 }}
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
            >
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
      </div>
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
