import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "antd";
import { selectCurrentUser } from "../../redux/user/user.selector";

class NoficationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: true,
      pushNofication: true,
      expectedPrice: 0,
    };
  }
  componentDidMount() {
    this.setState({ ...this.state, expectedPrice: this.props.product.price });
  }
  handleOnSubmit = (evt) => {
    evt.preventDefault();
    console.log(this.state);
  };
  render() {
    const { currentUser } = this.props;
    // // TODO: 06/22/20 sửa lại chỗ nào
    return (
      <div className="row">
        <div id="to" className="col-12 bg-white shadow-sm rounded p-4 mb-4">
          <h5 className="mb-3 text-gray-900">Theo dõi giá sản phẩm</h5>
          <form
            className="align-items-start bg-white mt-3 mb-3 ml-1 mr-1 p-3"
            onSubmit={this.handleOnSubmit}
          >
            <div className="row">
              <div className="offset-md-1 col-md-3 mb-3">
                <h6>Theo dõi sản phẩm này:</h6>
              </div>
              <div className="col-md-3 mb-3">
                <h6>Thông báo khi</h6>
                <div className="form-check">
                  <label className="form-check-label" htmlFor="expectedPrice">
                    Giá nhỏ hơn
                    <input
                      type="number"
                      className="mb-2 form-control form-control-sm"
                      placeholder="Nhập giá mong đợi"
                      name="expectedPrice"
                      value={this.state.expectedPrice}
                      onChange={(evt) => {
                        const { value: expectedPrice } = evt.target.value;
                        this.setState({ ...this.state, expectedPrice });
                      }}
                    />
                  </label>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <h6>Thông báo qua</h6>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="email"
                    defaultValue="true"
                    defaultChecked
                    disabled="disabled"
                    checked="checked"
                  />
                  <label className="form-check-label" htmlFor="email">
                    Email {currentUser.email}
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="pushNofication"
                    value={this.state.pushNofication}
                    defaultChecked
                    onChange={() => {
                      this.setState({
                        ...this.state,
                        pushNofication: !this.state.pushNofication,
                      });
                    }}
                  />
                  <label className="form-check-label" htmlFor="pushNofication">
                    Push notification
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="offset-md-10">
                <Button type="primary" htmlType="submit">
                  Xác nhận
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NoficationForm);
