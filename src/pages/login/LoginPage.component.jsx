import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Input, Button, message } from "antd";

import "./LoginPage.style.css";
import { emailSignInStart } from "../../redux/user/user.actions";

export class LoginPage extends Component {
  formRef = React.createRef();

  componentDidMount() {
    // //  fetch api or get data
    // this.formRef.current.setFieldsValue({
    //   username: "Hello world!",
    //   password: "123456",
    // });
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.error) {
      message.destroy();
      message.error("Đăng nhập thất bại!", 2);
    }
  }

  onFinish = (values) => {
    const { email, password } = values;
    this.props.emailSignInStart(email, password);
  };

  onFinishFailed = (errorInfo) => {
    // console.log("Failed:", errorInfo);
  };
  render() {
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
                message: "Please input invalid email!",
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
                message: "Please input your password!",
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
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.user.error,
});

const mapDispatchToProps = (dispatch) => ({
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
