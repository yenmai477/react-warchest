import React, { Component } from 'react'

export default class EditProfile extends Component {
    render() {
        return (
            <div>
                {/* Page Wrapper */}
                <div id="wrapper">
                    {/* Content Wrapper */}
                    <div id="content-wrapper" className="d-flex flex-column">
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
                                <div className="navbar-collapse collapse" id="navbarSupportedContent">
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
                                                <span className="mr-2 d-none d-lg-inline text-gray-600 small">Yen Mai</span>
                                                <img className="img-profile rounded-circle" src="images/user/yen.jpg" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                {/* End collapse navbar */}
                                {/* Topbar Navbar */}
                            </nav>
                            {/* End of Topbar */}
                            {/* Begin Page Content */}
                            <section className="user-panel-body py-5">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-3 col-sm-4">
                                            <div className="user-panel-body-left">
                                                <div className="bg-white rounded p-4 mb-4 text-center shadow-sm">
                                                    <img className="mb-3 mt-2 user-info-img" alt="Generic placeholder image" src="images/user/yen.jpg" />
                                                    <h6 className="text-black mb-2 text-gray-900">Yen Mai</h6>
                                                    <p className="m-0 mb-3">youremail@gmail.com</p>
                                                    <button type="button" className="btn btn-primary btn-block">
                                                        <i className="icofont-logout" /> Đăng xuất
                    </button>
                                                    <p className="mb-0 mt-3">
                                                        <a href="#">Chỉnh sửa thông tin</a>
                                                    </p>
                                                </div>
                                                <div className="user-panel-sidebar-link mb-4 bg-white rounded shadow-sm overflow-hidden">
                                                    <a href="#"><i className="icofont-user" /> Thông tin tài khoản</a>
                                                    <a href="#"><i className="icofont-bag" /> Sản phẩm của tôi</a>
                                                    <a href="#"><i className="icofont-ui-edit" /> Đổi mật khẩu</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-9 col-sm-8">
                                            <div className="user-panel-body-right">
                                                <div id="mc" className="user-panel-tab-view mb-4">
                                                    <div className="shadow-sm rounded overflow-hidden mb-3">
                                                        <div className="p-4 bg-white">
                                                            <h5 className="mb-0 text-gray-900">
                                                                Thông tin tài khoản
                        </h5>
                                                        </div>
                                                        <div className="nav nav-tabs">
                                                            <p className="m-3">
                                                                Thông tin về tài khoản của bạn
                        </p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <div className="bg-white p-4 shadow-sm border-radius">
                                                                    <form className="js-validate">
                                                                        <div className="row">
                                                                            {/* Input */}
                                                                            <div className="col-sm-6">
                                                                                <div className="js-form-message">
                                                                                    <label id="nameLabel" className="form-label">
                                                                                        Họ tên
                                      <span className="text-danger">*</span>
                                                                                    </label>
                                                                                    <div className="form-group">
                                                                                        <input type="text" className="form-control" name="name" defaultValue="Yen Mai" placeholder="Enter your name" aria-label="Enter your name" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            {/* End Input */}
                                                                        </div>
                                                                        <div className="row">
                                                                            {/* Input */}
                                                                            <div className="col-sm-6">
                                                                                <div className="js-form-message">
                                                                                    <label id="usernameLabel" className="form-label">
                                                                                        Email
                                      <span className="text-danger">*</span>
                                                                                    </label>
                                                                                    <div className="form-group">
                                                                                        <input type="text" className="form-control" name="username" defaultValue="yenemail@gmail.com" placeholder="Enter your username" aria-label="Enter your username" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            {/* End Input */}
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                                <div className="mb-0 pt-4 text-right">
                                                                    <a className="btn btn-primary" href="#">
                                                                        Lưu thay đổi
                            </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
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
                                                    Bản quyền © thuộc về Warchest 2020
                  </p>
                                                <p className="m-0">
                                                    <a href="#" className="text-secondary">Trang chủ</a> &nbsp; ·
                    &nbsp;
                    <a href="#" className="text-secondary">Về chúng tôi</a>
                    &nbsp; · &nbsp;
                    <a href="#" className="text-secondary"> Trợ giúp</a>
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
            </div>


        )
    }
}
