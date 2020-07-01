import React, { Component } from "react";
import { connect } from "react-redux";
import apiCall from "../../utils/apiCall";
import ProductCard from "../product-card/ProductCard.component";
import { Link } from "react-router-dom";
import CardSkeleton from "../card-skeleton/CardSkeleton.component";

class BestPriceProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isLoading: false,
    };
  }
  async componentDidMount() {
    this.setState({ ...this.state, isLoading: true });
    const { data: res } = await apiCall.get(
      "/products?limit=4&priceLabel[in]=[Sale tốt,Sale xịn]"
    );
    const products = res.data.data;
    this.setState({ ...this.state, products, isLoading: false });
  }

  render() {
    return (
      <section className="section-padding homepage-view-offers">
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h5 mb-0 text-gray-900">Giá tốt nhất</h1>
            <Link
              to="/"
              className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
            >
              <i className="fas fa-eye fa-sm text-white-50"></i> Xem tất cả
            </Link>
          </div>
          <div className="row">
            {this.state.isLoading && (
              <React.Fragment>
                {[...Array(4).keys()].map((item) => (
                  <div className="col-md-3 col-sm-12" key={item.id}>
                    <CardSkeleton />
                  </div>
                ))}
              </React.Fragment>
            )}
            {!this.state.isLoading &&
              this.state.products.map((item) => {
                return (
                  <div className="col-md-3 col-sm-12" key={item.id}>
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
