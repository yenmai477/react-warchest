import React from "react";

const WithSkeleton = (WrappedComponent, SkeletonComponent) => {
  const Component = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SkeletonComponent />
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Component;
};

export default WithSkeleton;
