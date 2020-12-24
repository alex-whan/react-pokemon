import React from 'react';

// This is a hook

function LoadingList(Component) {
  return function LoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return <p>Loading...</p>;
  };
}

export default LoadingList;
