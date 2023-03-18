import React from 'react';

import ShoppingAsset from '../../assets/shopping-image.svg';

import './Header.scss';

function Header() {
  return (
    <header className="products-header">
      <div className="products-header__container">
        <h1 className="products-header__text">Old St. Store</h1>
        <p className="products-header__label">Experience shopping at its finest - where quality and convenience meet, only on old st.</p>
      </div>
      <div className="products-header__asset">
        <img className="products-header__asset-image" alt="shopping header" src={ShoppingAsset} />
      </div>
    </header>
  );
}

export default Header;
