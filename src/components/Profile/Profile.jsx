import React, { Component } from 'react'
import SideBarProfile from './SideBarProfile'
import { Switch, Route } from "react-router-dom";
import Content from './Content.jsx'
import EditProfile from './EditProfile';
import UpdatePassword from './UpdatePassword';
export default class Profile extends Component {
    render() {
        const { path } = this.props.match;
        return (
            <div>
                <section class="user-panel-body py-5">
                    <div class="container">
                        <div className="row">
                            <SideBarProfile />
                            <Switch>
                                <Route exact path={path} component={Content} />
                                <Route path={`${path}/edit-profile`} component={EditProfile} />
                                <Route path={`${path}/update-password`} component={UpdatePassword} />
                            </Switch>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
