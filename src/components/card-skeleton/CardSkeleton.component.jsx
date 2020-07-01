import React, { Component } from "react";
import Skeleton from "react-loading-skeleton";

export default class CardSkeleton extends Component {
  render() {
    return (
      <div className="custom-card shadow-sm bg-white h-100">
        <div className="custom-card-image">
          <Skeleton height={150} />
        </div>
        <div className="p-3 pt-4">
          <div className="custom-card-body">
            <h6 className="mb-3  card-title">
              <Skeleton />
              <Skeleton />
            </h6>
            <p className="text-gray-500">
              <Skeleton />
            </p>
          </div>
          <div className="custom-card-footer">
            <Skeleton height={20} />
          </div>
        </div>
      </div>
    );
  }
}
