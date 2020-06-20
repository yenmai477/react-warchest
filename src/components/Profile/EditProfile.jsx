import React, { Component } from 'react'

export default class EditProfile extends Component {
    render() {
        return (

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


        )
    }
}
