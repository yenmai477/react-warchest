import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import { connect } from "react-redux";
import { getNoficationsStart } from "../../redux/nofication/nofication.action";
import { selectUserNofications } from "../../redux/nofication/nofication.selector";
import { Select, Button } from "antd";
import UserNoffication from "../user-nofications/UserNoffication.component";

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
    if (!this.props.userNofications.length && !this.props.loading) {
      return (
        <div className="col-lg-9">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="contentEmpty">
              <div className="imageSquare">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzU2IiBoZWlnaHQ9IjM1NiIgdmlld0JveD0iMCAwIDM1NiAzNTYiPgogICAgPGRlZnM+CiAgICAgICAgPHBhdGggaWQ9ImEiIGQ9Ik0wIDBoMzU2djM1NkgweiIvPgogICAgICAgIDxwYXRoIGlkPSJjIiBkPSJNMCAxOC45ODNWLjI0M2gxNTB2MzcuNDhIMHYtMTguNzR6Ii8+CiAgICAgICAgPHBhdGggaWQ9ImUiIGQ9Ik0wIDU1Ljc3NnY1NS41NTJoMTUwVi4yMjNIMHoiLz4KICAgICAgICA8cGF0aCBpZD0iZyIgZD0iTTQwLjgyOS4yNDNILjE4N3YzNy40OGg0MC42NDJWLjI0M3oiLz4KICAgICAgICA8cGF0aCBpZD0iaSIgZD0iTTAgMTQ4Ljg3OGgxNTBWLjI5M0gweiIvPgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+CiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2EiLz4KICAgICAgICA8L21hc2s+CiAgICAgICAgPHVzZSBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9IjAiIHhsaW5rOmhyZWY9IiNhIi8+CiAgICAgICAgPHJlY3Qgd2lkdGg9IjI0NiIgaGVpZ2h0PSIzOCIgeD0iNzUiIHk9IjcxIiBmaWxsPSIjRUVGOEZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG1hc2s9InVybCgjYikiIHJ4PSIxOSIgdHJhbnNmb3JtPSJyb3RhdGUoLTI2LjIzIDE5OCA5MCkiLz4KICAgICAgICA8cmVjdCB3aWR0aD0iMjQ2IiBoZWlnaHQ9IjM4IiB4PSIzNCIgeT0iMTM0IiBmaWxsPSIjRUVGOEZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG1hc2s9InVybCgjYikiIHJ4PSIxOSIgdHJhbnNmb3JtPSJyb3RhdGUoLTI2LjIzIDE1NyAxNTMpIi8+CiAgICAgICAgPHJlY3Qgd2lkdGg9IjI0NiIgaGVpZ2h0PSIzOCIgeD0iOTEiIHk9IjE0NyIgZmlsbD0iI0VFRjhGRiIgZmlsbC1ydWxlPSJub256ZXJvIiBtYXNrPSJ1cmwoI2IpIiByeD0iMTkiIHRyYW5zZm9ybT0icm90YXRlKC0zMy41OSAyMTQgMTY2KSIvPgogICAgICAgIDxyZWN0IHdpZHRoPSIyMTIiIGhlaWdodD0iMzgiIHg9IjgzIiB5PSIyMDUiIGZpbGw9IiNFRUY4RkYiIGZpbGwtcnVsZT0ibm9uemVybyIgbWFzaz0idXJsKCNiKSIgcng9IjE5IiB0cmFuc2Zvcm09InJvdGF0ZSgtMzMuNTkgMTg5IDIyNCkiLz4KICAgICAgICA8cmVjdCB3aWR0aD0iMTc2IiBoZWlnaHQ9IjM4IiB4PSI5MSIgeT0iMjUzIiBmaWxsPSIjRUVGOEZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG1hc2s9InVybCgjYikiIHJ4PSIxOSIgdHJhbnNmb3JtPSJyb3RhdGUoLTMzLjU5IDE3OSAyNzIpIi8+CiAgICAgICAgPHBhdGggZD0iTTU1IDMwOWgxOSIgbWFzaz0idXJsKCNiKSIvPgogICAgICAgIDxnIG1hc2s9InVybCgjYikiPgogICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDMgMTMzKSI+CiAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC4wNSkiPgogICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJkIiBmaWxsPSIjZmZmIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYyIvPgogICAgICAgICAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSIjRDI4RjM2IiBkPSJNMTMwLjQwNy4yNDNIMTkuNTkzQTcuMzA0IDcuMzA0IDAgMCAwIDEyLjc5IDQuOUwwIDM3LjcyM2gxNTBMMTM3LjIxIDQuOTAxYTcuMzA0IDcuMzA0IDAgMCAwLTYuODAzLTQuNjU4IiBtYXNrPSJ1cmwoI2QpIi8+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDM3LjU1KSI+CiAgICAgICAgICAgICAgICAgICAgPG1hc2sgaWQ9ImYiIGZpbGw9IiNmZmYiPgogICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNlIi8+CiAgICAgICAgICAgICAgICAgICAgPC9tYXNrPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNGMEFBNTEiIGQ9Ik0xNDIuNjc2IDExMS4zMjhINy4zMjRBNy4zMjQgNy4zMjQgMCAwIDEgMCAxMDQuMDA0Vi4yMjRoMTUwdjEwMy43OGE3LjMyNCA3LjMyNCAwIDAgMS03LjMyNCA3LjMyNCIgbWFzaz0idXJsKCNmKSIvPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTQuNDkyIC4wNSkiPgogICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJoIiBmaWxsPSIjZmZmIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjZyIvPgogICAgICAgICAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSIjRUFCRDU2IiBkPSJNNDAuODI5IDM3LjcyM0guMTg3TDIuMDY4LjI0M2gzNi44OHoiIG1hc2s9InVybCgjaCkiLz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNGRkQ2N0IiIGQ9Ik05My4yMDEgNTMuMzU1SDU2Ljc5OWEyLjEyIDIuMTIgMCAwIDEtMi4xMi0yLjEyVjM3Ljc3Mmg0MC42NDJ2MTMuNDYxYTIuMTIgMi4xMiAwIDAgMS0yLjEyIDIuMTIiLz4KICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNCNjdCMzciIGQ9Ik05NC4zODkgOTAuNjQ0aC01LjUyMlY2NC41NDNhNS4zMjggNS4zMjggMCAwIDAtNS4zMjktNS4zMjlINjYuNDYyYTUuMzI5IDUuMzI5IDAgMCAwLTUuMzMgNS4zMjl2MjYuMTAxaC01LjUyMWMtNi40NDggMC05LjYyNSA3Ljg0My00Ljk5MyAxMi4zM2wxOS4zODkgMTguNzg1YTcuMTc2IDcuMTc2IDAgMCAwIDkuOTg2IDBsMTkuMzktMTguNzg1YzQuNjMtNC40ODcgMS40NTQtMTIuMzMtNC45OTQtMTIuMzMiLz4KICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNGRkQ2N0IiIGQ9Ik01Mi4xMSAxNDIuNjEySDkuNjU0YTMuOTgzIDMuOTgzIDAgMCAxLTMuOTgyLTMuOTgydi0xNS44NjNjMC0yLjIgMS43ODMtMy45ODMgMy45ODItMy45ODNINTIuMTFjMi4yIDAgMy45ODMgMS43ODMgMy45ODMgMy45ODN2MTUuODYzYzAgMi4yLTEuNzgzIDMuOTgyLTMuOTgzIDMuOTgyIi8+CiAgICAgICAgICAgICAgICA8bWFzayBpZD0iaiIgZmlsbD0iI2ZmZiI+CiAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjaSIvPgogICAgICAgICAgICAgICAgPC9tYXNrPgogICAgICAgICAgICAgICAgPHBhdGggZmlsbD0iI0NGQTYzRCIgZD0iTTkuNDk2IDEyOC43NDVoNDIuNzczdi02LjI1SDkuNDk2ek05LjQ5NiAxMzguOTAxaDQyLjc3M3YtNi4yNUg5LjQ5NnoiIG1hc2s9InVybCgjaikiLz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="
                  alt="Sản phẩm tìm kiếm hiện tại không có"
                />
              </div>
              <strong className="title_empty mb-4">
                Không tìm thấy bất kỳ theo dõi giá sản phẩm nào
              </strong>
              <Link to="/app">
                <Button type="primary">Tiếp tục tìm kiếm</Button>
              </Link>
            </div>
          </div>
        </div>
      );
    }
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
              <UserNoffication isLoading={this.props.loading} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userNofications: selectUserNofications(state),
  loading: state.nofication.loading,
});

const mapDispatchToProps = (dispatch) => ({
  getUserNofications: () => dispatch(getNoficationsStart()),
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Content)
);
