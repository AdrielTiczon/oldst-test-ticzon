import React from 'react';
import { API_BASE_URL } from '../../constants';

import './Ads.scss';

// todo: create a purely random generating number not showing twice

const Ads = () => {
  const adId = Math.floor(Math.random() * 1000);
  const adUrl = `${API_BASE_URL}/ads/?r=${adId}`;

  return (
    <div className="ad">
      <img className="ad-image" src={adUrl} alt="advertisement" />
      <p className="ad-text">advertisement id: {adId}</p>
    </div>
  );
};

export default Ads;
