import React from 'react'
import { Link } from 'react-router-dom'
export default function Content() {
    return (
        <div className="col-xl-9 col-sm-8">
            <div className="user-panel-body-right">
                <div id="mc" className="user-panel-tab-view mb-4">
                    <div className="shadow-sm rounded overflow-hidden mb-3">
                        <div className="p-4 bg-white">
                            <h5 className="mb-0 text-gray-900">Sản phẩm</h5>
                        </div>
                        <div className="nav nav-tabs">
                            <p className="m-3">
                                Các sản phẩm đang được theo dõi của bạn
                        </p>
                        </div>
                    </div>
                    <div>
                        <div className="row">
                            <div className="col-xl-4 col-md-12 mb-4">
                                <div className="custom-card shadow-sm h-100">
                                    <div className="custom-card-image">
                                        <Link to="#">
                                            <img className="img-fluid item-img" src="images/products/1.jpg" />
                                        </Link>
                                        <div className="button-g-btn button-g-btn-up">
                                            <img className="img-fluid" src="images/brand/shopee.jpg" />
                                            <span>shopee.vn</span>
                                        </div>
                                    </div>
                                    <div className="p-3 pt-4">
                                        <div className="custom-card-body">
                                            <h6 className="mb-3 custom-height">
                                                <Link className="text-gray-900" to="#">Gương Để Bàn Hàn Quốc [Ảnh Thật]</Link>
                                            </h6>
                                            <p className="text-gray-500">
                                                <i className="icofont-clock-time" /> Cập nhật
                                  giá: 2 giờ trước
                                </p>
                                        </div>
                                        <div className="custom-card-footer d-flex align-items-center">
                                            <span className="text-success"><i className="icofont-price" /> 17.000
                                  đ</span><Link className="btn btn-sm btn-white ml-auto" to="#">Tới nơi bán</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-12 mb-4">
                                <div className="custom-card shadow-sm h-100">
                                    <div className="custom-card-image">
                                        <Link to="#">
                                            <img className="img-fluid item-img" src="images/products/2.jpg" />
                                        </Link>
                                        <div className="button-g-btn button-g-btn-up">
                                            <img className="img-fluid" src="images/brand/lazada.png" />
                                            <span>lazada.vn</span>
                                        </div>
                                    </div>
                                    <div className="p-3 pt-4">
                                        <div className="custom-card-body">
                                            <h6 className="mb-3">
                                                <Link className="text-gray-900" to="#">BỘ 3 HỘP THUỶ TINH CHỊU NHIỆT (380ML) KÈM
                                    TÚI GIỮ NHIỆT LOCK&amp;LOCK...</Link>
                                            </h6>
                                            <p className="text-gray-500">
                                                <i className="icofont-clock-time" /> Cập nhật:
                                  3 giờ trước
                                </p>
                                        </div>
                                        <div className="custom-card-footer d-flex align-items-center">
                                            <span className="text-success"><i className="icofont-price" /> 356.000
                                  đ</span><Link className="btn btn-sm btn-white ml-auto" to="#">Tới nơi bán</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-12 mb-4">
                                <div className="custom-card shadow-sm bg-white h-100">
                                    <div className="custom-card-image">
                                        <Link to="#">
                                            <img className="img-fluid item-img" src="images/products/3.jpg" />
                                        </Link>
                                        <div className="button-g-btn button-g-btn-up">
                                            <img className="img-fluid" src="images/brand/tiki.png" />
                                            <span>tiki.vn</span>
                                        </div>
                                    </div>
                                    <div className="p-3 pt-4">
                                        <div className="custom-card-body">
                                            <h6 className="mb-3">
                                                <Link className="text-gray-900" to="#">Mùng Chụp Tự Bung Cao Cấp Siêu Dày - 1M6
                                                X 2M - Màu Xanh Da Trời
                                  </Link>
                                            </h6>
                                            <p className="text-gray-500">
                                                <i className="icofont-clock-time" /> Cập nhật
                                  giá: 2 giờ trước
                                </p>
                                        </div>
                                        <div className="custom-card-footer d-flex align-items-center">
                                            <span className="text-success"><i className="icofont-price" /> 212.000
                                  ₫</span><Link className="btn btn-sm btn-white ml-auto" to="#">Tới nơi bán</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-12 mb-4">
                                <div className="custom-card shadow-sm h-100">
                                    <div className="custom-card-image">
                                        <Link to="#">
                                            <img className="img-fluid item-img" src="images/products/4.jpg" />
                                        </Link>
                                        <div className="button-g-btn button-g-btn-up">
                                            <img className="img-fluid" src="images/brand/sendo.png" />
                                            <span>sendo.vn</span>
                                        </div>
                                    </div>
                                    <div className="p-3 pt-4">
                                        <div className="custom-card-body">
                                            <h6 className="mb-3">
                                                <Link className="text-gray-900" to="#">GIẦY THỂ THAO NAM CỰC CHẤT 2020 XTHT 13 -
                                                chất 2020
                                  </Link>
                                            </h6>
                                            <p className="text-gray-500">
                                                <i className="icofont-clock-time" /> Cập nhật:
                                  2 giờ trước
                                </p>
                                        </div>
                                        <div className="custom-card-footer d-flex align-items-center">
                                            <span className="text-success"><i className="icofont-price" /> 79.000đ</span><Link className="btn btn-sm btn-white ml-auto" to="#">Tới nơi bán</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-12 mb-4">
                                <div className="custom-card shadow-sm h-100">
                                    <div className="custom-card-image">
                                        <Link to="#">
                                            <img className="img-fluid item-img" src="images/products/2.jpg" />
                                        </Link>
                                        <div className="button-g-btn button-g-btn-up">
                                            <img className="img-fluid" src="images/brand/lazada.png" />
                                            <span>lazada.vn</span>
                                        </div>
                                    </div>
                                    <div className="p-3 pt-4">
                                        <div className="custom-card-body">
                                            <h6 className="mb-3">
                                                <Link className="text-gray-900" to="#">BỘ 3 HỘP THUỶ TINH CHỊU NHIỆT (380ML) KÈM
                                    TÚI GIỮ NHIỆT LOCK&amp;LOCK...</Link>
                                            </h6>
                                            <p className="text-gray-500">
                                                <i className="icofont-clock-time" /> Cập nhật:
                                  3 giờ trước
                                </p>
                                        </div>
                                        <div className="custom-card-footer d-flex align-items-center">
                                            <span className="text-success"><i className="icofont-price" /> 356.000
                                  đ</span><Link className="btn btn-sm btn-white ml-auto" to="#">Tới nơi bán</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-12 mb-4">
                                <div className="custom-card shadow-sm bg-white h-100">
                                    <div className="custom-card-image">
                                        <Link to="#">
                                            <img className="img-fluid item-img" src="images/products/3.jpg" />
                                        </Link>
                                        <div className="button-g-btn button-g-btn-up">
                                            <img className="img-fluid" src="images/brand/tiki.png" />
                                            <span>tiki.vn</span>
                                        </div>
                                    </div>
                                    <div className="p-3 pt-4">
                                        <div className="custom-card-body">
                                            <h6 className="mb-3">
                                                <Link className="text-gray-900" to="#">Mùng Chụp Tự Bung Cao Cấp Siêu Dày - 1M6
                                                X 2M - Màu Xanh Da Trời
                                  </Link>
                                            </h6>
                                            <p className="text-gray-500">
                                                <i className="icofont-clock-time" /> Cập nhật
                                  giá: 2 giờ trước
                                </p>
                                        </div>
                                        <div className="custom-card-footer d-flex align-items-center">
                                            <span className="text-success"><i className="icofont-price" /> 212.000
                                  ₫</span><Link className="btn btn-sm btn-white ml-auto" to="#">Tới nơi bán</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
