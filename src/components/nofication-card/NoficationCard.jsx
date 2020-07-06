import React, { Component } from "react";
import { Link } from "react-router-dom";

import moment from "moment";
import "moment/locale/vi";

import "./NoficationCard.style.css";

import TikiImage from "../../assests/images/brands/tiki.png";
import LazadaImage from "../../assests/images/brands/lazada.png";
import ShopeeImage from "../../assests/images/brands/shopee.jpg";
import SendoImage from "../../assests/images/brands/sendo.png";
import { Button, Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { deleteNoficationDetailStart } from "../../redux/nofication/nofication.action";
import { connect } from "react-redux";

const { confirm } = Modal;

const getBrandImage = (site) => {
  const images = [];
  images["tiki.vn"] = TikiImage;
  images["lazada.vn"] = LazadaImage;
  images["shopee.vn"] = ShopeeImage;
  images["sendo.vn"] = SendoImage;
  return images[site];
};

class NoficationCard extends Component {
  showConfirm = (noficationId) => {
    const { deleteNofication } = this.props;
    confirm({
      title: "Bạn có thật sự muốn xóa theo dõi này?",
      icon: <ExclamationCircleOutlined />,
      okText: "Xóa theo dõi",
      cancelText: "Hủy",
      okType: "danger",
      content:
        "Khi nhấn Xóa theo dõi, theo dõi cho sản phẩm này sẽ bị xóa vĩnh viễn. Hãy cân nhắc kỹ trước khi xóa!",
      onOk() {
        deleteNofication(noficationId);
      },
      onCancel() {},
    });
  };
  render() {
    const { nofication } = this.props;
    const { expectedPrice, active, product, id: noficationId } = nofication;
    const type = active ? "success" : "danger";
    const status = active ? "Đang theo dõi" : "Ngừng theo dõi";
    const { name, image, site, id } = product;
    return (
      <div className="custom-card shadow-sm bg-white h-100">
        <div className="custom-card-image">
          <Link to={`/app/products/${id}`}>
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
              <Link className="text-gray-900" to={`/app/products/${id}`}>
                {name}
              </Link>
            </h6>
            <p className="text-gray-500">
              <span className="text-success">
                <i className="icofont-price"></i>{" "}
              </span>{" "}
              {`Giá nhỏ hơn: ${
                expectedPrice &&
                expectedPrice.toLocaleString("it-IT", {
                  style: "currency",
                  currency: "VND",
                })
              }`}
            </p>
          </div>
          <div className="custom-card-footer d-flex align-items-center">
            <p className="text-muted mb-0 d-flex align-items-center">
              <i
                className={`icofont-ui-press text-${type} align-middle mr-1`}
              ></i>{" "}
              {status}
            </p>
            <Button
              className="ml-auto"
              type="default"
              danger
              size="small"
              onClick={() => this.showConfirm(noficationId)}
            >
              Xóa
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  deleteNofication: (id) => dispatch(deleteNoficationDetailStart(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NoficationCard);
