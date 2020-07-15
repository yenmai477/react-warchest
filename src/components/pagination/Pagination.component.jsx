import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import queryString from "query-string";

class Pagination extends Component {
  render() {
    const { handleOnChange, total, pageSize } = this.props;
    // const { search } = location;
    // const params = queryString.parse(search);
    // const { page = 1 } = params;
    return (
      <Pagination
        current={1}
        total={total}
        pageSize={pageSize}
        onChange={handleOnChange}
      />
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Pagination)
);
