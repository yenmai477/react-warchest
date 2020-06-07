import React, { Component } from "react";
import { Link } from "react-router-dom";

import moment from "moment";
import "moment/locale/vi";

import "./ProductCard.style.css";

import TikiImage from "../../assests/images/brands/tiki.png";
import LazadaImage from "../../assests/images/brands/lazada.png";
import ShopeeImage from "../../assests/images/brands/shopee.jpg";
import SendoImage from "../../assests/images/brands/sendo.png";

moment.locale("vi");

const getBrandImage = (site) => {
  const images = [];
  images["tiki.vn"] = TikiImage;
  images["lazada.vn"] = LazadaImage;
  images["shopee.vn"] = ShopeeImage;
  images["sendo.vn"] = SendoImage;
  return images[site];
};

export default class ProductCard extends Component {
  renderPriceLabel = (label) => {
    if (label === "Sale ảo") {
      return (
        <div class="label-price">
          <span class="badge badge-error">{label}</span>
        </div>
      );
    }
    return (
      <div class="label-price">
        <span class="badge badge-success">{label}</span>
      </div>
    );
  };
  render() {
    const {
      productName,
      image,
      price,
      site,
      url,
      updatedAt,
      id,
      priceLabel,
    } = this.props;
    return (
      <div className="custom-card shadow-sm bg-white h-100">
        <div className="custom-card-image">
          {priceLabel && this.renderPriceLabel(priceLabel)}
          <Link to={`/products/${id}`}>
            <img className="img-fluid item-img" src={image} alt="product" />
          </Link>
          <div className="button-g-btn button-g-btn-up">
            <img className="img-fluid" src={getBrandImage(site)} alt="site" />
            <span>{site}</span>
          </div>
        </div>
        <div className="p-3 pt-4">
          <div className="custom-card-body">
            <h6 className="mb-3  card-title">
              <Link className="text-gray-900" to={`/products/${id}`}>
                {productName}
              </Link>
            </h6>
            <p className="text-gray-500">
              <i className="icofont-clock-time"></i>{" "}
              {`Cập nhật giá: ${moment(updatedAt).fromNow()}`}
            </p>
          </div>
          <div className="custom-card-footer d-flex align-items-center">
            <span className="text-success">
              <i className="icofont-price"></i>{" "}
              {price.toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })}
            </span>
            <a
              className="btn btn-sm btn-white ml-auto"
              href={url}
              target="_blank"
            >
              Tới nơi bán
            </a>
          </div>
        </div>
      </div>
    );
  }
}
