import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Input, Button } from "antd";

import "./LoginPage.style.css";

export class LoginPage extends Component {
  formRef = React.createRef();

  // componentDidMount() {
  //   //  fetch api or get data
  //   this.formRef.current.setFieldsValue({
  //     username: "Hello world!",
  //     password: "123456",
  //   });
  // }

  onFinish = (values) => {
    console.log("Success:", values);
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
            label="Username"
            name="username"
            placeholder="username"
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

          <div className="">
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Submit
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
