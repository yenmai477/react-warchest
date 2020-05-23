import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Button, Space } from "antd";

export class Hompage extends Component {
  render() {
    return (
      <div className="offset-md-4 col-md-4 text-center">
        <Card title={`${this.props.value}`}>
          <Space>
            <Button type="primary" onClick={this.props.increment}>
              Increase
            </Button>
            <Button danger onClick={this.props.decrement}>
              Decrease
            </Button>
          </Space>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  value: state.count.value,
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: "INCREMENT_START" }),
  decrement: () => dispatch({ type: "DECREMENT" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Hompage);
