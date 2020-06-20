import React from 'react'

export default function UpdatePassword() {
    return (

        <div className="col-xl-9 col-sm-8">
            <div className="user-panel-body-right">
                <div id="mc" className="user-panel-tab-view mb-4">
                    <div className="shadow-sm rounded overflow-hidden mb-3">
                        <div className="p-4 bg-white">
                            <h5 className="mb-0 text-gray-900">Cập nhật mật khẩu</h5>
                        </div>
                        <div className="nav nav-tabs">
                            <p className="m-3">
                                Thông tin mới về mật khẩu của bạn
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
                                                        Password
                        <span className="text-danger">*</span>
                                                    </label>
                                                    <div className="form-group">
                                                        <input type="password" className="form-control" name="password" placeholder="Password" aria-label="Nhập password" />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Input */}
                                        </div>
                                        <div className="row">
                                            {/* Input */}
                                            <div className="col-sm-6">
                                                <div className="js-form-message">
                                                    <label id="nameLabel" className="form-label">
                                                        Password mới
                        <span className="text-danger">*</span>
                                                    </label>
                                                    <div className="form-group">
                                                        <input type="password" className="form-control" name="newPassword" placeholder="Password mới" aria-label="Nhập password mới" />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Input */}
                                        </div>
                                        <div className="row">
                                            {/* Input */}
                                            <div className="col-sm-6">
                                                <div className="js-form-message">
                                                    <label id="nameLabel" className="form-label">
                                                        Xác nhận password
                        <span className="text-danger">*</span>
                                                    </label>
                                                    <div className="form-group">
                                                        <input type="password" className="form-control" name="newPasswordConfirm" placeholder="Xác nhận password" aria-label="Xác nhận password" />
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

    )
}
