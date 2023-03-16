import React from 'react';
import { API_BASE_URL } from '../../constants';
import generateRandomNumber from '../../helpers/generateUniqueNumbers';

import './Ads.scss';

// todo: create a purely random generating number not showing twice

const Ads = React.memo(() => {
  const randomNumber = generateRandomNumber();
  const adUrl = `${API_BASE_URL}/ads/?r=${randomNumber}`;

  return (
    <div className="advertisement">
      <img className="advertisement__image" src={adUrl} alt="advertisement" />
      <p className="advertisement__label">
        {`advertisement (${randomNumber})`}
      </p>
    </div>
  );
});

export default Ads;
