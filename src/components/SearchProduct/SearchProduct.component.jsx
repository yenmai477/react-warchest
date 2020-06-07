import React, { Component } from "react";
import { BestPriceProduct } from "../best-price/BestPriceProduct";

export default class SearchProduct extends Component {
  render() {
    return (
      <div className="content-wrapper">
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
                <div className="homepage-search-form" data-select2-id="8">
                  <form className="form-noborder" data-select2-id="7">
                    <div className="form-row">
                      <div className="col-lg-10 col-md-10 col-sm-12 form-group">
                        <input
                          type="text"
                          placeholder="Tìm sản phẩm Sale Xịn trên Shopee, Tiki, Sendo, ..."
                          className="form-control border-0 form-control-lg shadow-sm"
                        />
                      </div>
                      <div className="col-lg-2 col-md-2 col-sm-12 form-group">
                        <button className="btn btn-primary btn-block btn-lg btn-gradient shadow-sm">
                          <i
                            class="icofont-search"
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

        <BestPriceProduct />
      </div>
    );
  }
}
