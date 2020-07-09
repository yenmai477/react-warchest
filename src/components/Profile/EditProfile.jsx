import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import { connect } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { updateUserDataStart } from "../../redux/user/user.actions";

class EditProfile extends Component {
  formRef = React.createRef();

  componentDidMount() {
    const { currentUser } = this.props;
    this.formRef.current.setFieldsValue({
      name: currentUser.name,
      email: currentUser.email,
    });
  }

  onFinish = ({ name, email }) => {
    this.props.updateUserStart({
      name,
      email,
    });
  };

  render() {
    return (
      <div className="col-xl-9 col-md-8 col-sm-12">
        <div className="user-panel-body-right">
          <div id="mc" className="user-panel-tab-view mb-4">
            <div className="shadow-sm rounded overflow-hidden mb-3">
              <div className="p-4 bg-white">
                <h5 className="mb-0 text-gray-900">Thông tin tài khoản</h5>
              </div>
              <div className="nav nav-tabs">
                <p className="m-3">Thông tin về tài khoản của bạn</p>
              </div>
            </div>
            <div>
              <div className="row">
                <div className="col-md-12">
                  <div className="bg-white p-4 shadow-sm border-radius">
                    <Form
                      ref={this.formRef}
                      labelCol={{ span: 24 }}
                      name="basic"
                      onFinish={this.onFinish}
                      onFinishFailed={this.onFinishFailed}
                    >
                      <Form.Item
                        labelCol={{ span: 24 }}
                        label="Họ tên"
                        name="name"
                        placeholder="Họ Tên"
                        className="login-form"
                        rules={[
                          {
                            required: true,
                            message: "Vui lòng nhập tên người dùng",
                          },
                        ]}
                      >
                        <Input placeholder="Username" />
                      </Form.Item>

                      <Form.Item
                        label="Email"
                        name="email"
                        placeholder="email"
                        rules={[
                          {
                            required: true,
                            type: "email",
                            message: "Email không hợp lệ",
                          },
                        ]}
                      >
                        <Input placeholder="Email" readOnly />
                      </Form.Item>

                      <div className=" offset-xl-10 offset-lg-9 offset-md-8">
                        <Form.Item>
                          <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button mt-4"
                            block
                          >
                            Lưu thay đổi
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

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  updateUserStart: (user) => dispatch(updateUserDataStart(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
