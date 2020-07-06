import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
export default function LandingPage() {
  return (
    <div>
      <div>
        {/* Navigation */}
        <nav className="navbar navbar-light bg-light static-top">
          <div className="container">
            <Link className="navbar-brand" to="/">
              WarChest
            </Link>
            <Link className="btn btn-primary" to="/login">
              Đăng Nhập
            </Link>
          </div>
        </nav>
        {/* Masthead */}
        <header className="masthead text-white text-center">
          <div className="overlay" />
          <div className="container">
            <div className="row">
              <div className="col-xl-9 mx-auto">
                <h1 className="mb-5 white">
                  Bảo vệ người tiêu dùng chống mua phải hàng giả hàng nhái
                </h1>
              </div>
              <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                <form>
                  <div className="form-row">
                    <div className="col-12 ">
                      <Link
                        className="btn btn-block btn-lg btn-primary"
                        to="/register"
                      >
                        Đăng ký
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </header>
        {/* Icons Grid */}
        <section className="features-icons bg-light text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="icon-screen-desktop m-auto text-primary" />
                  </div>
                  <h3>Mua sắm như thường</h3>
                  <p className="lead mb-0">
                    Bạn sẽ được cảnh báo mỗi khi xem phải đồ khuyến mại ảo hoặc
                    kém chất lượng
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="icon-layers m-auto text-primary" />
                  </div>
                  <h3>Thao tác nhanh chóng</h3>
                  <p className="lead mb-0">
                    Chỉ với 3s bạn có thể nhận được kết quả khuyến mãi trên các
                    trang thương mại điện tử{" "}
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="icon-check m-auto text-primary" />
                  </div>
                  <h3>Bảo vệ túi tiền</h3>
                  <p className="lead mb-0">
                    Không bao giờ còn mất tiền oan vì đồ khuyến mại ảo, đồ dởm
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Image Showcases */}
        <section className="showcase">
          <div className="container-fluid p-0">
            <div className="row no-gutters">
              <div
                className="col-lg-6 order-lg-2 text-white showcase-img"
                style={{
                  backgroundImage:
                    'url("https://images.pexels.com/photos/34088/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")',
                }}
              />
              <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                <h2>Bảo vệ Bạn tại hơn một triệu gian hàng</h2>
                <p className="lead mb-0">
                  Phát hiện khuyến mại ảo, kém chất lượng trên tất cả các trang
                  mua sắm. Từ đồ điện tử, thời trang, gia dụng, đồ ăn,...
                </p>
              </div>
            </div>
            <div className="row no-gutters">
              <div
                className="col-lg-6 text-white showcase-img"
                style={{
                  backgroundImage:
                    'url("https://images.pexels.com/photos/935756/pexels-photo-935756.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")',
                }}
              />
              <div className="col-lg-6 my-auto showcase-text">
                <h2>Tính năng đang HOT</h2>
                <ul className="lead mb-0">
                  <li>Tạm Được </li>
                  <li>Sale Xịn</li>
                  <li>Sale Dỏm</li>
                </ul>
              </div>
            </div>
            <div className="row no-gutters">
              <div
                className="col-lg-6 order-lg-2 text-white showcase-img"
                style={{
                  backgroundImage:
                    'url("https://images.pexels.com/photos/842548/pexels-photo-842548.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")',
                }}
              />
              <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                <h2>Dễ dàng sử dụng &amp; thao tác nhanh chóng</h2>
                <p className="lead mb-0">
                  Tìm kiếm mọi lúc mọi nơi, nhận được kết quả giảm giá nhanh
                  chóng, thuận tiện và dễ dàng
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonials */}
        <section className="testimonials text-center bg-light">
          <div className="container">
            <h2 className="mb-5">Mọi người nói gì về WarChest ?</h2>
            <div className="row">
              <div className="col-lg-4">
                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                  <img
                    className="img-fluid rounded-circle mb-3"
                    src="data:image/png;base64,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"
                    alt="image"
                  />
                  <h5>Margaret E.</h5>
                  <p className="font-weight-light mb-0">
                    "This is fantastic! Thanks so much guys!"
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                  <img
                    className="img-fluid rounded-circle mb-3"
                    src="data:image/png;base64,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"
                    alt="image"
                  />
                  <h5>Fred S.</h5>
                  <p className="font-weight-light mb-0">
                    "WarChest is amazing."
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                  <img
                    className="img-fluid rounded-circle mb-3"
                    src="data:image/png;base64,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"
                    alt="image"
                  />
                  <h5>Sarah W.</h5>
                  <p className="font-weight-light mb-0">
                    "Thanks so much for making these free resources available to
                    us!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Call to Action */}
        <section className="call-to-action text-white text-center">
          <div className="overlay" />
          <div className="container">
            <div className="row">
              <div className="col-xl-9 mx-auto">
                <h1 className="mb-4 white">
                  Còn chần chừ gì nữa, dùng WarChest ngay thôi
                </h1>
              </div>
              <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                <form>
                  <div className="form-row">
                    <div className="col-12 col-md-9 mb-2 mb-md-0">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Nhập email của bạnbạn..."
                      />
                    </div>
                    <div className="col-12 col-md-3">
                      <button
                        type="submit"
                        className="btn btn-block btn-lg btn-primary"
                      >
                        Đăng ký
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer className="footer bg-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 h-100 text-center text-lg-left my-auto">
                <ul className="list-inline mb-2">
                  <li className="list-inline-item">
                    <Link to="#">About</Link>
                  </li>
                  <li className="list-inline-item">⋅</li>
                  <li className="list-inline-item">
                    <Link to="#">Contact</Link>
                  </li>
                  <li className="list-inline-item">⋅</li>
                  <li className="list-inline-item">
                    <Link to="#">Terms of Use</Link>
                  </li>
                  <li className="list-inline-item">⋅</li>
                  <li className="list-inline-item">
                    <Link to="#">Privacy Policy</Link>
                  </li>
                </ul>
                <p className="text-muted small mb-4 mb-lg-0">
                  © Your Website 2019. All Rights Reserved.
                </p>
              </div>
              <div className="col-lg-6 h-100 text-center text-lg-right my-auto">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item mr-3">
                    <Link to="#">
                      <i className="fab fa-facebook fa-2x fa-fw" />
                    </Link>
                  </li>
                  <li className="list-inline-item mr-3">
                    <Link to="#">
                      <i className="fab fa-twitter-square fa-2x fa-fw" />
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#">
                      <i className="fab fa-instagram fa-2x fa-fw" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
