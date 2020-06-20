import React from 'react'
import { Link } from "react-router-dom"
import { Component } from 'react';

export default class SideBarProfile extends Component {
    render() {
        return (
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
                            <Link to={`/app/profile/edit-profile`}>Chỉnh sửa thông tin</Link>
                        </p>
                    </div>
                    <div className="user-panel-sidebar-link mb-4 bg-white rounded shadow-sm overflow-hidden">
                        <Link to={`/app/profile/edit-profile`}><i className="icofont-user" /> Thông tin tài khoản</Link>
                        <Link to={`/app/profile`}><i className="icofont-bag" /> Sản phẩm của tôi</Link>
                        <Link to={`/app/profile/update-password`}><i className="icofont-ui-edit" /> Đổi mật khẩu</Link>
                    </div>
                </div>
            </div>


        )
    }
}
