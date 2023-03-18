import React from 'react';

import './Loader.scss';

function Loader() {
  return (
    <div className="loader">
      <div className="loader__spinner" />
      <span className="loader__label">loading</span>
    </div>
  );
}

export default Loader;
