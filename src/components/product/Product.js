import React from 'react';
import parseDate from '../../helpers/parseDate';
import parseDollar from '../../helpers/parseDollar';

import './Product.scss';

function Product(props) {
  const {
    discountPercentage,
    thumbnail,
    title,
    rating,
    price,
    date,
  } = props;

  return (
    <div className="product">
      <div className="product__thumbnail">
        <img className="product__image" alt={title} src={thumbnail} />
        <span className="product__percentage">{`${discountPercentage}% off`}</span>
      </div>
      <div className="product__description">
        <h3 className="product__title">
          {title}
        </h3>
        <p className="product__price">
          {parseDollar(price)}
        </p>
        <p className="product__rating">
          ⭐
          {rating}
        </p>
        <p className="product__date">
          {parseDate(date)}
        </p>
      </div>
    </div>
  );
}

export default Product;
