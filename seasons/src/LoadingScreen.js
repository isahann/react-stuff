import React from 'react';

const LoadingScreen = props => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

// If LoadingScreen gets created without a message property, it will replace with this default value.
LoadingScreen.defaultProps = {
  message: 'Loading, please wait...'
};

export default LoadingScreen;
