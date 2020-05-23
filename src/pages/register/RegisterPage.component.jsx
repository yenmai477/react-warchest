import React, { Component } from "react";
import { connect } from "react-redux";

export class RegisterPage extends Component {
  render() {
    return <div>Register Page</div>;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
