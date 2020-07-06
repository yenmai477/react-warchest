import React, { Component } from "react";
import { connect } from "react-redux";
import queryString from "query-string";
import SearchSection from "../../search-section/SearchSection.component";
import { Select, Pagination } from "antd";

import LeftFilter from "../../left-filter/LeftFilter.component";
import {
  selectSearchProducts,
  selectTotalProducts,
} from "../../../redux/product/product.selector";
import ProductCard from "../../product-card/ProductCard.component";
import { withRouter } from "react-router-dom";
import { searchProductsStart } from "../../../redux/product/product.actions";
import RightSearchResult from "../../right-search-result/RightSearchResult.component";

const { Option } = Select;

class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = { sort: "createAt", page: 1 };
  }
  componentDidMount() {
    const { search } = this.props.location;
    const { sort = "createAt", page = 1 } = queryString.parse(search);
    this.setState({ ...this.state, sort, page: page * 1 });
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.search !== prevProps.location.search) {
      const { search: newSearch } = this.props.location;
      const { search: oldSearch } = prevProps.location;
      const { q } = queryString.parse(newSearch);
      const { q: oldQ } = queryString.parse(oldSearch);
      if (q !== oldQ) {
        this.setState({ ...this.state, page: 1 });
      }
      window.scrollTo(0, 0);
    }
  }

  handleChangePage = (page) => {
    const { search } = this.props.location;
    const params = queryString.parse(search);
    this.setState({ ...this.state, page });
    delete params["page"];
    const paramsString = `${queryString.stringify(params)}&page=${page}`;
    this.props.searchProductsStart(paramsString);
    this.props.history.push({
      pathname: "/app/search",
      search: paramsString,
    });
  };

  handleChange = (value) => {
    const { search } = this.props.location;
    const params = queryString.parse(search);
    this.setState({ ...this.state, sort: value });
    delete params["sort"];

    const paramsString = `${queryString.stringify(params)}&sort=${value}`;
    this.props.searchProductsStart(paramsString);
    this.props.history.push({
      pathname: "/app/search",
      search: paramsString,
    });
  };
  render() {
    return (
      <div className="content-wrapper d-flex flex-column">
        <SearchSection />

        <section className="section-padding">
          <div className="container pt-lg-4">
            <div className="row">
              <div className="col-md-12 mb-4">
                <div className="page-title-h5 d-flex align-items-center">
                  <h5 className="my-0 text-gray-900">Kết quả tìm kiếm</h5>

                  <div className="dropdown ml-auto">
                    <Select
                      value={this.state.sort}
                      style={{ width: 150 }}
                      onChange={this.handleChange}
                    >
                      <Option value="price">Giá giảm dần</Option>
                      <Option value="createAt">Mới nhất</Option>
                      <Option value="updatedAt">Mới cập nhật</Option>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <LeftFilter />

              <RightSearchResult isLoading={this.props.loading} />
            </div>
          </div>
        </section>
        <div className="offset-xl-3 col-xl-9 text-center mb-4">
          <Pagination
            total={this.props.total}
            current={this.state.page}
            defaultCurrent={this.state.page}
            pageSize={18}
            showSizeChanger={false}
            onChange={this.handleChangePage}
            hideOnSinglePage
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: selectSearchProducts(state),
  total: selectTotalProducts(state),
  loading: state.loadingBar.default,
});

const mapDispatchToProps = (dispatch) => ({
  searchProductsStart: (params) => dispatch(searchProductsStart(params)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SearchResult)
);
