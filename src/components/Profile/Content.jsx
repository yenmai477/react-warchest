import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import { connect } from "react-redux";
import { getNoficationsStart } from "../../redux/nofication/nofication.action";
import { selectUserNofications } from "../../redux/nofication/nofication.selector";
import { Select } from "antd";
import NoficationCard from "../nofication-card/NoficationCard";

const { Option } = Select;

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = { filter: "all", page: 1 };
  }

  componentDidMount() {
    this.props.getUserNofications();
  }
  render() {
    return (
      <div className="col-xl-9 col-sm-8">
        <div className="user-panel-body-right">
          <div id="mc" className="user-panel-tab-view mb-4">
            <div className="shadow-sm rounded overflow-hidden mb-3">
              <div className="p-4 bg-white">
                <h5 className="mb-0 text-gray-900">Sản phẩm</h5>
              </div>
              <div className="nav nav-tabs">
                <p className="m-3">Các sản phẩm đang được theo dõi của bạn</p>
              </div>
            </div>
            <div>
              <div className="row mb-2 mt-3">
                <div className="col-12">
                  <div className="dropdown float-right">
                    <Select
                      value={this.state.filter}
                      style={{ width: 150 }}
                      onChange={this.handleChange}
                    >
                      <Option value="all">Tất cả</Option>
                      <Option value="active">Đang theo dõi</Option>
                      <Option value="disable">Ngừng theo dõi</Option>
                    </Select>
                  </div>
                </div>
              </div>
              <div className="row">
                {this.props.userNofications.map((item) => {
                  return (
                    <div className="col-xl-4 col-md-12 mb-4" key={item.id}>
                      <NoficationCard nofication={item} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userNofications: selectUserNofications(state),
});

const mapDispatchToProps = (dispatch) => ({
  getUserNofications: () => dispatch(getNoficationsStart()),
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Content)
);
