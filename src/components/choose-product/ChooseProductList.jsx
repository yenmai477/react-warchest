import React, { Component } from "react";
import { connect } from "react-redux";
import apiCall from "../../utils/apiCall";
import ProductCard from "../product-card/ProductCard.component";

import CardSkeleton from "../card-skeleton/CardSkeleton.component";

const options = {
  bestPrice: {
    path: "&priceLabel[in]=[Sale tốt,Sale xịn]",
    title: "Giá tốt nhất",
  },
  lastProduct: { path: "", title: "Sản phẩm mới nhất" },
  lastUpdated: { path: "&sort=-updatedAt", title: "Mới cập nhật" },
};
class BestPriceProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isLoading: false,
    };
  }
  async componentDidMount() {
    const { type } = this.props;
    this.setState({ ...this.state, isLoading: true });
    const { data: res } = await apiCall.get(
      `/products?limit=4${options[type].path}`
    );
    const products = res.data.data;
    this.setState({ ...this.state, products, isLoading: false });
  }

  render() {
    const { type } = this.props;
    return (
      <section className="section-padding homepage-view-offers">
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h5 mb-0 text-gray-900">{options[type].title}</h1>
            {/* <Link
              to="/"
              className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
            >
              <i className="fas fa-eye fa-sm text-white-50"></i> Xem tất cả
            </Link> */}
          </div>
          <div className="row">
            {this.state.isLoading && (
              <React.Fragment>
                {[...Array(4).keys()].map((item) => (
                  <div className="col-lg-3 col-md-4 col-sm-12 mb-4" key={item}>
                    <CardSkeleton />
                  </div>
                ))}
              </React.Fragment>
            )}
            {!this.state.isLoading &&
              this.state.products.map((item) => {
                return (
                  <div
                    className="col-lg-3 col-md-4 col-sm-6 mb-4"
                    key={item.id}
                  >
                    <ProductCard
                      site={item.site}
                      productName={item.name}
                      image={item.image}
                      price={item.price}
                      url={item.url}
                      updatedAt={item.updatedAt}
                      priceLabel={item.priceLabel}
                      id={item.id}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BestPriceProduct);
