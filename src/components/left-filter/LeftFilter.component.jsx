import React, { Component } from "react";
import { Collapse, Checkbox, InputNumber, Button } from "antd";
import queryString from "query-string";
import "./LeftFilter.style.css";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { searchProductsStart } from "../../redux/product/product.actions";

const { Panel } = Collapse;

const sites = ["tiki.vn", "lazada.vn", "shopee.vn", "sendo.vn"];
const sales = ["Sale xịn", "Sale tốt"];

class LeftFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectSites: [],
      selectSales: [],
      minPrice: 0,
      maxPrice: 0,
    };
  }

  componentDidMount() {
    const { search } = this.props.location;
    const params = queryString.parse(search, { arrayFormat: "comma" });
    const {
      selectSales = [],
      selectSites = [],
      minPrice = 0,
      maxPrice = 0,
    } = params;

    this.setState({
      ...this.state,
      selectSales,
      selectSites,
      minPrice,
      maxPrice,
    });
    const paramsString = queryString.stringify(params);
    this.props.searchProductsStart(paramsString);
  }

  handleOnChange = (name, checkedValues) => {
    this.setState({ ...this.state, [name]: checkedValues });
  };

  componentDidUpdate(prevProps) {
    if (this.props.location.search !== prevProps.location.search) {
      const { search: newSearch } = this.props.location;
      const { search: oldSearch } = prevProps.location;
      const { q } = queryString.parse(newSearch);
      const { q: oldQ } = queryString.parse(oldSearch);
      if (q !== oldQ) {
        this.handleResetFilter();
      }
      window.scrollTo(0, 0);
    }
  }

  handleResetFilter = () => {
    this.setState({
      selectSites: [],
      selectSales: [],
      minPrice: 0,
      maxPrice: 0,
    });

    const { search } = this.props.location;
    const {
      selectSales,
      selectSites,
      minPrice,
      maxPrice,
      ...oldParams
    } = queryString.parse(search);

    const paramsString = `${queryString.stringify(oldParams)}`;
    this.props.searchProductsStart(paramsString);
    this.props.history.push({
      pathname: "/app/search",
      search: paramsString,
    });
  };
  handleOnSubmit = () => {
    let { state } = this;
    if (state.maxPrice === 0 && state.minPrice === 0) {
      delete state["maxPrice"];
      delete state["minPrice"];
    }
    const params = queryString.stringify(state, { arrayFormat: "comma" });
    const { search } = this.props.location;
    const {
      selectSales,
      selectSites,
      minPrice,
      maxPrice,
      page,
      ...oldParams
    } = queryString.parse(search);
    const paramsString = queryString.stringify(oldParams) + "&" + params;
    this.props.searchProductsStart(paramsString);
    this.props.history.push({
      pathname: "/app/search",
      search: paramsString,
    });
  };

  render() {
    return (
      <div className="col-lg-3">
        <div className="filters shadow-sm rounded bg-white mb-4">
          <div className="filters-header pl-4 pr-4 pt-3 pb-3">
            <h6 className="m-0">Bộ lọc kết quả</h6>
          </div>
          <Collapse defaultActiveKey={["1", "2", "3"]}>
            <Panel header="Tìm theo trang" key="1">
              <Checkbox.Group
                options={sites}
                value={this.state.selectSites}
                onChange={(value) => this.handleOnChange("selectSites", value)}
              />
            </Panel>
            <Panel header="Phân loại sale" key="2">
              <Checkbox.Group
                options={sales}
                value={this.state.selectSales}
                onChange={(value) => this.handleOnChange("selectSales", value)}
              />
            </Panel>
            <Panel header="Theo khoảng giá" key="3">
              <div className="d-flex justify-content-between">
                <InputNumber
                  value={this.state.minPrice}
                  style={{ width: 100 }}
                  min="0"
                  formatter={(value) => {
                    value = value.match(/\d+/g);
                    if (value === null) return 0;
                    return `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                  }}
                  parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                  onChange={(value) => this.handleOnChange("minPrice", value)}
                />
                <span>-</span>
                <InputNumber
                  min="0"
                  value={this.state.maxPrice}
                  style={{ width: 100 }}
                  formatter={(value) => {
                    value = value.match(/\d+/g);
                    if (value === null) return 0;
                    return `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                  }}
                  parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                  onChange={(value) => this.handleOnChange("maxPrice", value)}
                />
              </div>
            </Panel>
          </Collapse>
          <Button type="primary" block onClick={this.handleOnSubmit}>
            Lọc sản phẩm
          </Button>
          <Button
            type="danger"
            block
            onClick={this.handleResetFilter}
            style={{ marginTop: 5 }}
          >
            Xóa bộ lọc
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  searchProductsStart: (params) => dispatch(searchProductsStart(params)),
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(LeftFilter);
