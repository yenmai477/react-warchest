import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { LoadingBar } from "react-redux-loading-bar";

export class LoadingIndicator extends Component {
  render() {
    const { showBarStatus, style } = this.props;

    return (
      <LoadingBar
        loading={showBarStatus}
        style={{ backgroundColor: "#1890ff", ...style }}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  showBarStatus: state.loadingBar.default || 0,
});

const mapDispatchToProps = {};

LoadingIndicator.propTypes = {
  showBarStatus: PropTypes.number.isRequired,
  style: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoadingIndicator);
