import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import { connect } from "react-redux";
import { compose } from "redux";
import { isUri } from "valid-url";
import {
  searchProductsStart,
  searchURLProductStart,
} from "../../redux/product/product.actions";
import showMessage from "../../utils/showMessage";

class SearchSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }

  componentDidMount() {
    const { pathname, search } = this.props.location;
    if (pathname === "/app/search" && search) {
      const params = queryString.parse(search);
      this.setState({ ...this.state, search: params.q });
    }
  }

  handleOnChange = (evt) => {
    const value = evt.target.value;
    this.setState({
      ...this.state,
      [evt.target.name]: value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    let { search } = this.state;
    const { history } = this.props;
    search = search.trim();
    if (search === "") return;
    if (isUri(search)) {
      const url = new URL(search);
      const domain = url.hostname.replace("www.", "");
      // Kiểm tra link được hổ trợ hay không
      const supportedDomain = ["shopee.vn", "lazada.vn", "tiki.vn", "sendo.vn"];
      if (!supportedDomain.includes(domain)) {
        window.scrollTo(0, 0);
        return showMessage(
          "error",
          "Trang web bạn yêu cầu chưa được hỗ trợ!.",
          2,
          {
            top: 70,
          }
        );
      }

      // Tạo sản phẩm mới cho các trang web đã được hỗ trợ
      this.props.searchProductUrlStart({ url: search, history });
      return;
    }
    this.props.searchProductsStart(`q=${search}`);
    this.props.history.push({
      pathname: "/app/search",
      search: `?q=${search}`,
    });
  };
  render() {
    return (
      <section className="section-padding homepage-search-block position-relative">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto pt-lg-5">
              <div className="homepage-search-title text-center">
                <h1 className="mb-3 text-shadow text-gray-900 font-weight-bold">
                  Tìm giá tốt nhất tại
                  <span className="font-weight-light"> Warchest</span>
                </h1>
                <h5 className="mb-5 text-shadow text-gray-800 font-weight-normal">
                  Hãy để các chúng tôi tìm kiếm và phân tích giá tốt nhất cho
                  bạn!
                </h5>
              </div>
              <div className="homepage-search-form">
                <form className="form-noborder" onSubmit={this.handleOnSubmit}>
                  <div className="form-row">
                    <div className="col-lg-10 col-md-10 col-sm-12 form-group">
                      <input
                        type="text"
                        placeholder="Tìm sản phẩm Sale Xịn trên Shopee, Tiki, Sendo, ..."
                        className="form-control border-0 form-control-lg shadow-sm"
                        name="search"
                        onChange={this.handleOnChange}
                        value={this.state.search}
                      />
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-12 form-group">
                      <button className="btn btn-primary btn-block btn-lg btn-gradient shadow-sm">
                        <i
                          className="icofont-search"
                          style={{ fontSize: 15 }}
                        ></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <h6 className="mb-0 mt-1 text-shadow text-center text-gray-500-700 font-weight-normal">
                E.g. mặt nạ ngủ, khuôn làm bánh, giày nam, khuôn trung thu,...
              </h6>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  searchProductsStart: (params) => dispatch(searchProductsStart(params)),
  searchProductUrlStart: (params) => dispatch(searchURLProductStart(params)),
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(SearchSection);
