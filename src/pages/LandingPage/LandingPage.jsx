import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { faMoneyCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
                    <FontAwesomeIcon icon={faDesktop} className="icon" />
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
                    <FontAwesomeIcon icon={faLayerGroup} className="icon" />
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
                    <FontAwesomeIcon icon={faMoneyCheck} className="icon" />
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
                    className="img-fluid mb-3"
                    src="https://images.pexels.com/photos/920381/pexels-photo-920381.jpeg?cs=srgb&dl=woman-wearing-tank-top-sitting-by-the-window-920381.jpg&fm=jpg"
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
                    className="img-fluid mb-3"
                    src="https://images.pexels.com/photos/927451/pexels-photo-927451.jpeg?cs=srgb&dl=depth-of-field-photo-of-man-sitting-on-chair-while-holding-927451.jpg&fm=jpg"
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
                    className="img-fluid mb-3"
                    src="https://images.pexels.com/photos/838413/pexels-photo-838413.jpeg?cs=srgb&dl=man-wearing-gray-blazer-838413.jpg&fm=jpg"
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
