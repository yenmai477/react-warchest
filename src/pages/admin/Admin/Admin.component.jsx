import React, { Component } from 'react'

export default class Admin extends Component {
    render() {
        return (
            <div>
                <div id="page-top">
                    {/* Page Wrapper */}
                    <div id="wrapper">
                        {/* Content Wrapper */}
                        <div id="content-wrapper">
                            {/* Main Content */}
                            <div id="content">
                                {/* Topbar */}
                                <nav className="navbar navbar-expand-lg navbar-light bg-white navbar-light shadow-sm topbar osahan-top-main">
                                    {/* Sidebar Toggle (Topbar) */}
                                    <a className="navbar-brand" href="index.html">
                                        <img className="img-fluid w-40" src="images/logo.svg" />
                                    </a>
                                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon" />
                                    </button>
                                    {/* Collapse navbar */}
                                    <div className="navbar-collapse collapse" id="navbarSupportedContent" style={{}}>
                                        <ul className="navbar-nav mr-auto">
                                            <li className="nav-item active">
                                                <a className="nav-link" href="#"><i className="fas fa-home" /></a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <span>Trang chủ</span>
                                                </a>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <span>Sản phẩm của tôi</span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <span>Giới thiệu</span>
                                                </a>
                                            </li>
                                        </ul>
                                        <ul className="navbar-nav ml-auto flex-direction-row">
                                            <div className="topbar-divider d-none d-sm-block" />
                                            {/* Nav Item - User Information */}
                                            <li className="nav-item">
                                                <a className="nav-link pr-0" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">Valerie Luna</span>
                                                    <img className="img-profile rounded-circle" src="images/user-icon/user.png" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* End collapse navbar */}
                                    {/* Topbar Navbar */}
                                </nav>
                                {/* End of Topbar */}
                                {/* Begin Page Content */}
                                <section className="section-padding homepage-search-block position-relative">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-8 mx-auto pt-lg-5">
                                                <div className="homepage-search-title text-center">
                                                    <h1 className="mb-3 text-shadow text-gray-900 font-weight-bold">
                                                        Find Best Deals in
                    <span className="font-weight-light">UK</span>
                                                    </h1>
                                                    <h5 className="mb-5 text-shadow text-gray-800 font-weight-normal">
                                                        Let our experts find the best coupons and deals for you!
                  </h5>
                                                </div>
                                                <div className="homepage-search-form">
                                                    <form className="form-noborder">
                                                        <div className="form-row">
                                                            <div className="col-lg-3 col-md-3 col-sm-12 form-group">
                                                                <div className="location-dropdown">
                                                                    <i className="icofont-location-arrow" />
                                                                    <select className="custom-select form-control-lg">
                                                                        <option> All </option>
                                                                        <option> Coupans </option>
                                                                        <option> Offers </option>
                                                                        <option> Stores </option>
                                                                        <option> Restaurant </option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-7 col-md-7 col-sm-12 form-group">
                                                                <input type="text" placeholder="Search for stores, coupons, & offers…" className="form-control border-0 form-control-lg shadow-sm" />
                                                            </div>
                                                            <div className="col-lg-2 col-md-2 col-sm-12 form-group">
                                                                <button type="submit" className="btn btn-primary btn-block btn-lg btn-gradient shadow-sm">
                                                                    <i className="icofont-search" />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <h6 className="mb-0 mt-1 text-shadow text-center text-gray-500-700 font-weight-normal">
                                                    E.g. Coupans, Offers, Brands, Stores, Restaurant &amp; more...
                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className="section-padding homepage-view-offers">
                                    <div className="container">
                                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                            <h1 className="h5 mb-0 text-gray-900">Top Offers</h1>
                                            <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-eye fa-sm text-white-50" /> View All</a>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-3 col-sm-6">
                                                <div className="custom-card shadow-sm h-100">
                                                    <div className="custom-card-image">
                                                        <a href="#">
                                                            <img className="img-fluid item-img" src="images/custom-card/1.png" />
                                                        </a>
                                                        <div className="button-g-btn button-g-btn-up">
                                                            <img className="img-fluid" src="images/brand/1.png" />
                                                            <span>MakeMyTrip</span>
                                                        </div>
                                                    </div>
                                                    <div className="p-3 pt-4">
                                                        <div className="custom-card-body">
                                                            <h6 className="mb-3">
                                                                <a className="text-gray-900" href="#">Get Flat 30% OFF on Payment Via RBL Bank</a>
                                                            </h6>
                                                            <p className="text-gray-500">
                                                                <i className="icofont-clock-time" /> Ends in 18 days
                      </p>
                                                        </div>
                                                        <div className="custom-card-footer d-flex align-items-center">
                                                            <span className="text-danger"><i className="icofont-sale-discount" /> 50 % OFF</span><a className="btn btn-sm btn-white ml-auto" href="#">Get Offer</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-sm-6">
                                                <div className="custom-card shadow-sm h-100">
                                                    <div className="custom-card-image">
                                                        <a href="#">
                                                            <img className="img-fluid item-img" src="images/custom-card/2.png" />
                                                        </a>
                                                        <div className="button-g-btn button-g-btn-up">
                                                            <img className="img-fluid" src="images/brand/2.png" />
                                                            <span>Dominos</span>
                                                        </div>
                                                    </div>
                                                    <div className="p-3 pt-4">
                                                        <div className="custom-card-body">
                                                            <h6 className="mb-3">
                                                                <a className="text-gray-900" href="#">Special Offer: Get Up to 50% Off On Web Hosting
                        </a>
                                                            </h6>
                                                            <p className="text-gray-500">
                                                                <i className="icofont-clock-time" /> Ends in 18 days
                      </p>
                                                        </div>
                                                        <div className="custom-card-footer d-flex align-items-center">
                                                            <span className="text-danger"><i className="icofont-sale-discount" /> 50 % OFF</span><a className="btn btn-sm btn-white ml-auto" href="#">Get Offer</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-sm-6">
                                                <div className="custom-card shadow-sm bg-white h-100">
                                                    <div className="custom-card-image">
                                                        <a href="#">
                                                            <img className="img-fluid item-img" src="images/custom-card/3.png" />
                                                        </a>
                                                        <div className="button-g-btn button-g-btn-up">
                                                            <img className="img-fluid" src="images/brand/3.png" />
                                                            <span>Amazon</span>
                                                        </div>
                                                    </div>
                                                    <div className="p-3 pt-4">
                                                        <div className="custom-card-body">
                                                            <h6 className="mb-3">
                                                                <a className="text-gray-900" href="#">Get Flat 30% OFF on Payment Via RBL Bank</a>
                                                            </h6>
                                                            <p className="text-gray-500">
                                                                <i className="icofont-clock-time" /> Ends in 18 days
                      </p>
                                                        </div>
                                                        <div className="custom-card-footer d-flex align-items-center">
                                                            <span className="text-danger"><i className="icofont-sale-discount" /> 50 % OFF</span><a className="btn btn-sm btn-white ml-auto" href="#">Get Offer</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-sm-6">
                                                <div className="custom-card shadow-sm h-100">
                                                    <div className="custom-card-image">
                                                        <a href="#">
                                                            <img className="img-fluid item-img" src="images/custom-card/4.png" />
                                                        </a>
                                                        <div className="button-g-btn button-g-btn-up">
                                                            <img className="img-fluid" src="images/brand/4.png" />
                                                            <span>Myntra</span>
                                                        </div>
                                                    </div>
                                                    <div className="p-3 pt-4">
                                                        <div className="custom-card-body">
                                                            <h6 className="mb-3">
                                                                <a className="text-gray-900" href="#">Special Offer: Get Up to 50% Off On Web Hosting
                        </a>
                                                            </h6>
                                                            <p className="text-gray-500">
                                                                <i className="icofont-clock-time" /> Ends in 18 days
                      </p>
                                                        </div>
                                                        <div className="custom-card-footer d-flex align-items-center">
                                                            <span className="text-danger"><i className="icofont-sale-discount" /> 50 % OFF</span><a className="btn btn-sm btn-white ml-auto" href="#">Get Offer</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className="section-padding homepage-store-block">
                                    <div className="container">
                                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                            <h1 className="h5 mb-0 text-gray-900">Top Stores</h1>
                                            <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-eye fa-sm text-white-50" /> View All</a>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-lg-12">
                                                <div className="owl-carousel owl-theme owl-carousel-four homepage-coupon-carousel">
                                                    <div className="item">
                                                        <div className="custom-card bg-white shadow-sm h-100 stor-card">
                                                            <div className="custom-card-image">
                                                                <div className="member-plan">
                                                                    <span className="badge badge-warning">Gold Member</span>
                                                                </div>
                                                                <a href="#">
                                                                    <img className="img-fluid item-img" src="images/custom-card/5.png" />
                                                                </a>
                                                                <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                                                                    <svg viewBox="0 0 2880 480" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M2160 0C1440 240 720 240 720 240H0V480H2880V0H2160Z" fill="currentColor" />
                                                                    </svg>
                                                                </div>
                                                                <div className="store-star">
                                                                    <span className="badge badge-success"><i className="icofont-star" /> 3.1</span>
                                                                </div>
                                                            </div>
                                                            <div className="p-3">
                                                                <div className="custom-card-body">
                                                                    <h6 className="mb-0">
                                                                        <a className="text-gray-900" href="#">The Home Depot, Inc.</a>
                                                                    </h6>
                                                                    <p className="text-gray-500 mb-2">
                                                                        Andheri East Office, Mumbai
                          </p>
                                                                    <p className="text-gray-500 mb-0">
                                                                        <span className="text-gray-900">Variety store</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="p-3 border-top">
                                                                <div className="custom-card-badge">
                                                                    <span className="badge badge-danger"><i className="icofont-sale-discount" /> OFFER</span>
                          Flat 50% on all Stores
                        </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <div className="custom-card bg-white shadow-sm h-100 stor-card">
                                                            <div className="custom-card-image">
                                                                <a href="#">
                                                                    <img className="img-fluid item-img" src="images/custom-card/6.png" />
                                                                </a>
                                                                <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                                                                    <svg viewBox="0 0 2880 480" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M2160 0C1440 240 720 240 720 240H0V480H2880V0H2160Z" fill="currentColor" />
                                                                    </svg>
                                                                </div>
                                                                <div className="store-star">
                                                                    <span className="badge badge-success"><i className="icofont-star" /> 3.1</span>
                                                                </div>
                                                            </div>
                                                            <div className="p-3">
                                                                <div className="custom-card-body">
                                                                    <h6 className="mb-0">
                                                                        <a className="text-gray-900" href="#">Target Corporation</a>
                                                                    </h6>
                                                                    <p className="text-gray-500 mb-2">
                                                                        Andheri East Office, Mumbai
                          </p>
                                                                    <p className="text-gray-500 mb-0">
                                                                        <span className="text-warning"><i className="icofont-clock-time" /> Time Left :
                              2 days: 3 Hrs</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="p-3 border-top">
                                                                <div className="custom-card-badge">
                                                                    <span className="badge badge-danger"><i className="icofont-sale-discount" /> OFFER</span>
                          Flat 50% on all Stores
                        </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <div className="custom-card bg-white shadow-sm h-100 stor-card">
                                                            <div className="custom-card-image">
                                                                <div className="member-plan">
                                                                    <span className="badge badge-info">Silver Member</span>
                                                                </div>
                                                                <a href="#">
                                                                    <img className="img-fluid item-img" src="images/custom-card/7.png" />
                                                                </a>
                                                                <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                                                                    <svg viewBox="0 0 2880 480" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M2160 0C1440 240 720 240 720 240H0V480H2880V0H2160Z" fill="currentColor" />
                                                                    </svg>
                                                                </div>
                                                                <div className="store-star">
                                                                    <span className="badge badge-success"><i className="icofont-star" /> 3.1</span>
                                                                </div>
                                                            </div>
                                                            <div className="p-3">
                                                                <div className="custom-card-body">
                                                                    <h6 className="mb-0">
                                                                        <a className="text-gray-900" href="#">Phoenix Market City</a>
                                                                    </h6>
                                                                    <p className="text-gray-500 mb-2">
                                                                        Andheri East Office, Mumbai
                          </p>
                                                                    <p className="text-gray-500 mb-0">
                                                                        <span className="text-gray-900">Variety store</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="p-3 border-top">
                                                                <div className="custom-card-badge">
                                                                    <span className="badge badge-danger"><i className="icofont-sale-discount" /> OFFER</span>
                          Flat 50% on all Stores
                        </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <div className="custom-card bg-white shadow-sm h-100 stor-card">
                                                            <div className="custom-card-image">
                                                                <a href="#">
                                                                    <img className="img-fluid item-img" src="images/custom-card/8.png" />
                                                                </a>
                                                                <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                                                                    <svg viewBox="0 0 2880 480" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M2160 0C1440 240 720 240 720 240H0V480H2880V0H2160Z" fill="currentColor" />
                                                                    </svg>
                                                                </div>
                                                                <div className="store-star">
                                                                    <span className="badge badge-success"><i className="icofont-star" /> 3.1</span>
                                                                </div>
                                                            </div>
                                                            <div className="p-3">
                                                                <div className="custom-card-body">
                                                                    <h6 className="mb-0">
                                                                        <a className="text-gray-900" href="#">Amazon.com, Inc.</a>
                                                                    </h6>
                                                                    <p className="text-gray-500 mb-2">
                                                                        Andheri East Office, Mumbai
                          </p>
                                                                    <p className="text-gray-500 mb-0">
                                                                        <span className="text-warning"><i className="icofont-clock-time" /> Time Left :
                              2 days: 3 Hrs</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="p-3 border-top">
                                                                <div className="custom-card-badge">
                                                                    <span className="badge badge-info"><i className="icofont-sale-discount" /> OFFER</span>
                          Flat 50% on all Stores
                        </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <div className="custom-card bg-white shadow-sm h-100 stor-card">
                                                            <div className="custom-card-image">
                                                                <div className="member-plan">
                                                                    <span className="badge badge-warning">Gold Member</span>
                                                                </div>
                                                                <a href="#">
                                                                    <img className="img-fluid item-img" src="images/custom-card/6.png" />
                                                                </a>
                                                                <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                                                                    <svg viewBox="0 0 2880 480" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M2160 0C1440 240 720 240 720 240H0V480H2880V0H2160Z" fill="currentColor" />
                                                                    </svg>
                                                                </div>
                                                                <div className="store-star">
                                                                    <span className="badge badge-success"><i className="icofont-star" /> 3.1</span>
                                                                </div>
                                                            </div>
                                                            <div className="p-3">
                                                                <div className="custom-card-body">
                                                                    <h6 className="mb-0">
                                                                        <a className="text-gray-900" href="#">The Home Depot, Inc.</a>
                                                                    </h6>
                                                                    <p className="text-gray-500 mb-2">
                                                                        Andheri East Office, Mumbai
                          </p>
                                                                    <p className="text-gray-500 mb-0">
                                                                        <span className="text-gray-900">Variety store</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="p-3 border-top">
                                                                <div className="custom-card-badge">
                                                                    <span className="badge badge-danger"><i className="icofont-sale-discount" /> OFFER</span>
                          Flat 50% on all Stores
                        </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className="section-padding homepage-coupon">
                                    <div className="container">
                                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                            <h1 className="h5 mb-0 text-gray-900">Top Coupans</h1>
                                            <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-eye fa-sm text-white-50" /> View All</a>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-lg-12">
                                                <div className="owl-carousel owl-theme owl-carousel-four homepage-coupon-carousel">
                                                    <div className="item">
                                                        <div className="bg-white p-4 shadow-sm text-center h-100 border-radius">
                                                            <div className="all-coupon">
                                                                <img className="mb-3 user-cou-img" src="images/user-coupans/1.png" alt="Generic placeholder image" />
                                                                <h4 className="mt-1 h5 text-gray-900">50% OFF</h4>
                                                                <h6 className="mb-4 mt-3 pb-2 text-secondary font-weight-normal">
                                                                    Get Flat 50% OFF On First Order
                        </h6>
                                                            </div>
                                                            <div className="mb-0">
                                                                <p className="mb-0 text-gray-500">
                                                                    <i className="icofont-clock-time" /> Ends 09.15.2020
                        </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <div className="bg-white p-4 shadow-sm text-center h-100 border-radius">
                                                            <div className="all-coupon">
                                                                <img className="mb-3 user-cou-img" src="images/user-coupans/2.png" alt="Generic placeholder image" />
                                                                <h4 className="mt-1 h5 text-gray-900">
                                                                    Buy 1 Get 1 Free
                        </h4>
                                                                <h6 className="mb-4 mt-3 pb-2 text-secondary font-weight-normal">
                                                                    Get Flat 50% OFF On First Order
                        </h6>
                                                            </div>
                                                            <div className="mb-0">
                                                                <p className="mb-0 text-gray-500">
                                                                    <i className="icofont-clock-time" /> Ends 09.15.2020
                        </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <div className="bg-white p-4 shadow-sm text-center h-100 border-radius">
                                                            <div className="all-coupon">
                                                                <img className="mb-3 user-cou-img" src="images/user-coupans/3.png" alt="Generic placeholder image" />
                                                                <h4 className="mt-1 h5 text-gray-900">Free Burger</h4>
                                                                <h6 className="mb-4 mt-3 pb-2 text-secondary font-weight-normal">
                                                                    Get Flat 50% OFF On First Order
                        </h6>
                                                            </div>
                                                            <div className="mb-0">
                                                                <p className="mb-0 text-gray-500">
                                                                    <i className="icofont-clock-time" /> Ends 09.15.2020
                        </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <div className="bg-white p-4 shadow-sm text-center h-100 border-radius">
                                                            <div className="all-coupon">
                                                                <img className="mb-3 user-cou-img" src="images/user-coupans/4.png" alt="Generic placeholder image" />
                                                                <h4 className="mt-1 h5 text-gray-900">80% OFF</h4>
                                                                <h6 className="mb-4 mt-3 pb-2 text-secondary font-weight-normal">
                                                                    Get Flat 50% OFF On First Order
                        </h6>
                                                            </div>
                                                            <div className="mb-0">
                                                                <p className="mb-0 text-gray-500">
                                                                    <i className="icofont-clock-time" /> Ends 09.15.2020
                        </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <div className="bg-white p-4 shadow-sm text-center h-100 border-radius">
                                                            <div className="all-coupon">
                                                                <img className="mb-3 user-cou-img" src="images/user-coupans/5.png" alt="Generic placeholder image" />
                                                                <h4 className="mt-1 h5 text-gray-900">50% OFF</h4>
                                                                <h6 className="mb-4 mt-3 pb-2 text-secondary font-weight-normal">
                                                                    Get Flat 50% OFF On First Order
                        </h6>
                                                            </div>
                                                            <div className="mb-0">
                                                                <p className="mb-0 text-gray-500">
                                                                    <i className="icofont-clock-time" /> Ends 09.15.2020
                        </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className="section-padding homepage-rest-block">
                                    <div className="container">
                                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                            <h1 className="h5 mb-0 text-gray-900">Top Restaurant</h1>
                                            <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-eye fa-sm text-white-50" /> View All</a>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-3 col-sm-6">
                                                <div className="custom-card shadow-sm bg-white h-100">
                                                    <div className="custom-card-image">
                                                        <a href="#">
                                                            <img className="img-fluid item-img" src="images/custom-card/9.png" />
                                                        </a>
                                                        <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                                                            <svg viewBox="0 0 2880 480" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M2160 0C1440 240 720 240 720 240H0V480H2880V0H2160Z" fill="currentColor" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="p-3">
                                                        <div className="custom-card-body">
                                                            <h6 className="mb-1">
                                                                <a className="text-gray-900" href="#">Special Offer: Get Up to 50% Off On Web Hosting</a>
                                                            </h6>
                                                            <p className="text-gray-500 mb-2">
                                                                <i className="icofont-price" /> <s>$150</s>
                                                                <span className="text-gray-600 font-weight-bold">$80</span>
                                                            </p>
                                                        </div>
                                                        <div className="custom-card-badge mt-2">
                                                            <span className="badge badge-success">OFFER</span> Flat 50%
                      on all Stores
                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-sm-6">
                                                <div className="custom-card shadow-sm bg-white h-100">
                                                    <div className="custom-card-image">
                                                        <a href="#">
                                                            <img className="img-fluid item-img" src="images/custom-card/6.png" />
                                                        </a>
                                                        <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                                                            <svg viewBox="0 0 2880 480" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M2160 0C1440 240 720 240 720 240H0V480H2880V0H2160Z" fill="currentColor" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="p-3">
                                                        <div className="custom-card-body">
                                                            <h6 className="mb-1">
                                                                <a className="text-gray-900" href="#">New User - Get Flat Rs.100 OFF + Rs.300 Licious
                          Cash</a>
                                                            </h6>
                                                            <p className="text-gray-500 mb-2">
                                                                <i className="icofont-price" /> <s>$150</s>
                                                                <span className="text-gray-600 font-weight-bold">$80</span>
                                                            </p>
                                                        </div>
                                                        <div className="custom-card-badge mt-2">
                                                            <span className="badge badge-success">OFFER</span> Flat 50%
                      on all Stores
                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-sm-6">
                                                <div className="custom-card shadow-sm bg-white h-100">
                                                    <div className="custom-card-image">
                                                        <a href="#">
                                                            <img className="img-fluid item-img" src="images/custom-card/3.png" />
                                                        </a>
                                                        <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                                                            <svg viewBox="0 0 2880 480" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M2160 0C1440 240 720 240 720 240H0V480H2880V0H2160Z" fill="currentColor" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="p-3">
                                                        <div className="custom-card-body">
                                                            <h6 className="mb-1">
                                                                <a className="text-gray-900" href="#">Coupon Code: Get Flat 50% Off On Online Food</a>
                                                            </h6>
                                                            <p className="text-gray-500 mb-2">
                                                                <i className="icofont-price" /> <s>$150</s>
                                                                <span className="text-gray-600 font-weight-bold">$80</span>
                                                            </p>
                                                        </div>
                                                        <div className="custom-card-badge mt-2">
                                                            <span className="badge badge-success">OFFER</span> Flat 50%
                      on all Stores
                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-sm-6">
                                                <div className="custom-card shadow-sm bg-white h-100">
                                                    <div className="custom-card-image">
                                                        <a href="#">
                                                            <img className="img-fluid item-img" src="images/custom-card/8.png" />
                                                        </a>
                                                        <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                                                            <svg viewBox="0 0 2880 480" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M2160 0C1440 240 720 240 720 240H0V480H2880V0H2160Z" fill="currentColor" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="p-3">
                                                        <div className="custom-card-body">
                                                            <h6 className="mb-1">
                                                                <a className="text-gray-900" href="#">New User - Get Flat Rs.100 OFF + Rs.300 Licious
                          Cash</a>
                                                            </h6>
                                                            <p className="text-gray-500 mb-2">
                                                                <i className="icofont-price" /> <s>$150</s>
                                                                <span className="text-gray-600 font-weight-bold">$80</span>
                                                            </p>
                                                        </div>
                                                        <div className="custom-card-badge mt-2">
                                                            <span className="badge badge-danger">OFFER</span> Flat 50%
                      on all Stores
                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className="footer section-padding">
                                    <div className="container">
                                        <div className="row py-lg-4">
                                            <div className="col-xl-2 col-sm-6">
                                                <div className="footer-brand">
                                                    <img className="img-fluid" src="images/logo.svg" />
                                                </div>
                                            </div>
                                            <div className="col-xl-2 col-sm-6">
                                                <h6 className="text-gray-900">PRODUCTS</h6>
                                                <ul>
                                                    <li><a href="#">Page Builder</a></li>
                                                    <li><a href="#">UI Kit</a></li>
                                                    <li><a href="#">Styleguide</a></li>
                                                    <li><a href="#">Documentation</a></li>
                                                    <li><a href="#">Changelog</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-xl-2 col-sm-6">
                                                <h6 className="text-gray-900">SERVICES</h6>
                                                <ul>
                                                    <li><a href="#">Services</a></li>
                                                    <li><a href="#">Contact</a></li>
                                                    <li><a href="#">Careers</a></li>
                                                    <li><a href="#">Pagebuilder</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-xl-2 col-sm-6">
                                                <h6 className="text-gray-900">CONNECT</h6>
                                                <ul>
                                                    <li><a href="#">Terms</a></li>
                                                    <li><a href="#">Privacy</a></li>
                                                    <li><a href="#">Page Builder</a></li>
                                                    <li><a href="#">UI Kit</a></li>
                                                    <li><a href="#">Styleguide</a></li>
                                                    <li><a href="#">Documentation</a></li>
                                                    <li><a href="#">Support</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-xl-4 col-sm-6">
                                                <h6 className="text-gray-900">Subscribe to our Newsletter</h6>
                                                <form className="form-inline newsletter-form mb-1">
                                                    <input type="text" className="form-control mr-sm-2" placeholder="Enter your email" />
                                                    <button type="submit" className="btn btn-primary">
                                                        Subscribe
                  </button>
                                                </form>
                                                <small><a href="#">Register now to get updates on
                    <span className="text-info">Offers and Coupons</span></a></small>
                                                <div className="app mt-4 pt-2">
                                                    <h6 className="text-gray-900">DOWNLOAD APP</h6>
                                                    <a href="#">
                                                        <img className="img-fluid" src="images/google.png" />
                                                    </a>
                                                    <a href="#">
                                                        <img className="img-fluid" src="images/apple.png" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className="py-4 bg-white osahan-copyright">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-xl-12">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <p className="m-0 text-secondary">
                                                        Copyright © Your Website 2020
                  </p>
                                                    <p className="m-0">
                                                        <a href="#" className="text-secondary">About Us</a> &nbsp; ·
                    &nbsp;
                    <a href="#" className="text-secondary">Privacy Policy</a>
                    &nbsp; · &nbsp;
                    <a href="#" className="text-secondary">Terms &amp; Conditions</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            {/* /.container-fluid */}
                        </div>
                        {/* End of Main Content */}
                    </div>
                    {/* End of Content Wrapper */}
                    {/* End of Page Wrapper */}
                    {/* Scroll to Top Button*/}
                    <a className="scroll-to-top rounded-circle" href="#page-top">
                        <i className="fas fa-angle-up" />
                    </a>
                    {/* Logout Modal*/}
                    <div className="modal fade" id="logoutModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                                    <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    Select "Logout" below if you are ready to end your current session.
        </div>
                                <div className="modal-footer">
                                    <button className="btn btn-secondary" type="button" data-dismiss="modal">
                                        Cancel
          </button>
                                    <a className="btn btn-primary" href="login.html">Logout</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
