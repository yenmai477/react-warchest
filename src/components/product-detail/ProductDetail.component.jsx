import React, { Component } from "react";
import { connect } from "react-redux";
import PriceChart from "../price-chart/PriceChart.component";

import { selectProductDetails } from "../../redux/product/product.selector";
import {
  getProductDetailStart,
  clearProductDetails,
} from "../../redux/product/product.actions";

import moment from "moment";
import "moment/locale/vi";

import "./ProductDetail.style.css";
import TikiImage from "../../assests/images/brands/tiki.png";
import LazadaImage from "../../assests/images/brands/lazada.png";
import ShopeeImage from "../../assests/images/brands/shopee.jpg";
import SendoImage from "../../assests/images/brands/sendo.png";

import NoficationFormComponent from "../nofication-form/NoficationForm.component";

const getBrandImage = (site) => {
  const images = [];
  images["tiki.vn"] = TikiImage;
  images["lazada.vn"] = LazadaImage;
  images["shopee.vn"] = ShopeeImage;
  images["sendo.vn"] = SendoImage;
  return images[site];
};

const formatPrice = (price) =>
  price.toLocaleString("it-IT", {
    style: "currency",
    currency: "VND",
  });
class ProductDetail extends Component {
  componentDidMount() {
    console.log("props", this.props);
    const { id } = this.props.match.params;
    this.props.getProductDetails(id);
  }

  componentWillUnmount() {
    this.props.clearProductDetails();
  }

  renderPriceLabel = (label) => {
    if (label === "Sale ảo") {
      return (
        <span>
          Sản phẩm này là{" "}
          <span class="badge badge-pill badge-danger">{label}</span>
        </span>
      );
    }
    return (
      <span>
        Sản phẩm này là{" "}
        <span class="badge badge-pill badge-success">{label}</span>
      </span>
    );
  };

  render() {
    const { product } = this.props;
    if (!product) return <div></div>;

    const { priceTracks } = product;

    // const prices = priceTracks.map((item) => item.price);

    // const labels = priceTracks.map((item) =>
    //   moment(item.priceTs).utc().format("DD-MM-YYYY")
    // );

    let countChangePrice = 0;
    // for (let index = 1; index < prices.length; index++) {
    //   if (prices[index] !== prices[index - 1]) {
    //     countChangePrice++;
    //   }
    // }

    let dataPrice = [];

    for (let index = 1; index < priceTracks.length; index++) {
      const { price } = priceTracks[index];
      const { price: oldPrice } = priceTracks[index - 1];
      console.log(price, oldPrice);

      if (price !== oldPrice) {
        countChangePrice++;
        dataPrice.push(priceTracks[index]);
      }
    }
    if (dataPrice.length < 2) {
      dataPrice = priceTracks;
    }

    const prices = dataPrice.map((item) => item.price);

    const labels = dataPrice.map((item) =>
      moment(item.priceTs).utc().format("DD-MM-YYYY")
    );

    const countPrices = [...new Set(prices)].length;

    return (
      <div className="content-wrapper">
        <section className="offer-dedicated-body section-padding">
          <div className="container">
            {/* Begin product infomation */}
            <div className="row">
              <div className="col-12">
                <div className="shadow-sm rounded overflow-hidden mb-4">
                  <div className="bg-white coupon-deal-detail-main d-flex">
                    <div className="coupon-deal-detail-main-block">
                      <img
                        className="img-fluid coupon-deal-detail-main-img"
                        src={product.image}
                        alt={product.name}
                      />
                      <div className="got-badge">
                        <img
                          className="user-cou-img"
                          src={getBrandImage(product.site)}
                          alt={product.site}
                        />
                      </div>
                    </div>
                    <div className="coupon-deal-detail-main-body p-4">
                      <h3 className="col-md-11 pr-lg-5 mb-3 text-gray-900">
                        {product.name}
                      </h3>
                      <h6 className="coupon-deal-detail-main-body-p font-weight-light pr-lg-5 text-secondary">
                        Sản phẩm này trên{" "}
                        <b className="text-warning">{product.site}</b> có giá{" "}
                        <b className="text-warning">
                          {formatPrice(product.price)}
                        </b>{" "}
                        ({moment(product.updatedAt).fromNow()}).
                      </h6>
                      <h6 className="coupon-deal-detail-main-body-p font-weight-light pr-lg-5 text-secondary">
                        Tính từ ngày{" "}
                        <b className="text-warning">
                          {moment(product.createdAt).format("DD-MM-yyyy")}
                        </b>
                        , giá thấp nhất của mặt hàng là{" "}
                        <b className="text-danger">
                          {formatPrice(product.minPrice)}
                        </b>
                        , cao nhất{" "}
                        <b className="text-success">
                          {formatPrice(product.maxPrice)}
                        </b>
                      </h6>
                      <h6 className="coupon-deal-detail-main-body-p font-weight-light pr-lg-5 text-secondary">
                        <b className="text-gray-900">Kết luận: </b>{" "}
                        {product.priceLabel
                          ? this.renderPriceLabel(product.priceLabel)
                          : "Không có kết luận nào thật sự thú vị cho sản phẩm này"}
                      </h6>
                      <h6 className="coupon-deal-detail-main-body-p font-weight-light pr-lg-5 text-secondary">
                        Hãy cùng đào sâu Lịch sử giá của sản phẩm này sẽ hiểu
                        chi tiết nhé!
                      </h6>
                    </div>
                  </div>
                  <div className="custom-nav coupon-deal-detail-main-footer bg-white border-top d-flex align-items-center px-4">
                    <p className="mb-3 mt-3 font-weight-light text-gray-500">
                      <i className="icofont-users-alt-4 text-danger mr-2" />
                      {product.user.email}
                      <i className="ml-4 icofont-clock-time text-danger mr-2" />
                      {moment(product.updatedAt).fromNow()}
                    </p>
                    <span className="ml-auto">
                      <a
                        type="button"
                        className="btn btn-primary btn-sm shadow-sm"
                        href={product.url}
                        target="_blank"
                      >
                        Tới nơi bán
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* End product Infomation */}
            {/* Begin price tracker */}
            <div className="row">
              <div className="col-xl-8 col-sm-12">
                <div className="bg-white shadow-sm rounded mb-4">
                  <h5 className="mb-4 pt-4 pl-4 pr-4 text-gray-900">
                    Lịch sử giá
                  </h5>
                  <div className="pb-4">
                    <div className="m-5">
                      {/* <canvas id="myChart" /> */}
                      <PriceChart
                        labels={labels}
                        data={prices}
                        max={product.maxPrice}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-sm-12">
                <div className="bg-white shadow-sm rounded p-4 mb-4">
                  <h5 className="mb-4 text-gray-900">Review giá</h5>
                  <p>Một vài điều thứ vị cho sản phẩm của bạn:</p>
                  <ul className="dot-list">
                    <li>
                      {product.historyRange}. (Lịch sử giá càng dài sẽ càng tốt)
                    </li>
                    <li>
                      Sản phẩm có mức giá trung bình là{" "}
                      <p className="text-success">
                        {" "}
                        {formatPrice(product.avgPrice)}.
                      </p>
                    </li>
                    <li>
                      Hệ thống ghi nhận sản phẩm{" "}
                      {countChangePrice
                        ? `có ${countChangePrice} lần thay đổi giá`
                        : `chưa từng thay đổi giá`}{" "}
                    </li>
                    <li>
                      {countPrices === 1
                        ? "Một mặt hàng có mức giá vô cùng bền bĩ và kiên định."
                        : `Sản phẩm có ${countPrices} mức giá khác nhau kể từ lúc được theo dõi trên hệ thống`}
                    </li>
                    <li className="text-warning">{product.priceAnalysis}</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* End price tracker */}
            {/* Begin subscribe product */}
            <NoficationFormComponent product={product} />
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  product: selectProductDetails(state),
});

const mapDispatchToProps = (dispatch) => ({
  getProductDetails: (params) => dispatch(getProductDetailStart(params)),
  clearProductDetails: () => dispatch(clearProductDetails()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
