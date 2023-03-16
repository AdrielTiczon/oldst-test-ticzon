import React, { Fragment } from 'react';

import Ads from '../ads/Ads';
import Product from '../product/Product';

import './ProductsGrid.scss';

function ProductsGrid({ products }) {
  return (
    <div className="products">
      {products.map((product, i) => {
        const {
          id, title, price, discountPercentage, rating, thumbnail, date,
        } = product;
        if ((i + 1) % 20 === 0) {
          return (
            <Fragment key={id}>
              <Product
                title={title}
                price={price}
                rating={rating}
                date={date}
                thumbnail={thumbnail}
                discountPercentage={discountPercentage}
              />
              {/* <Ads /> */}
            </Fragment>
          );
        }

        return (
          <Product
            key={id}
            title={title}
            price={price}
            rating={rating}
            date={date}
            thumbnail={thumbnail}
            discountPercentage={discountPercentage}
          />
        );
      })}
    </div>
  );
}

export default ProductsGrid;
