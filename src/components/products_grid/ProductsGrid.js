import React, { Fragment } from 'react';

import Ads from '../ads/Ads';
import Loader from '../loader/Loader';
import Product from '../product/Product';

import './ProductsGrid.scss';

function ProductsGrid({
  products,
  hasMoreData,
  loading,
  error,
}) {
  return (
    <>
      <div className="products">
        {products.map((product, i) => {
          const {
            id, title, price, discountPercentage, rating, thumbnail, date,
          } = product;
          const showAd = (i + 1) % 20 === 0;

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
              {showAd && <Ads />}
            </Fragment>
          );
        })}
      </div>
      {hasMoreData && !loading
        && (
        <div className="products-scroll">
          Scroll ⬇ to load more data
        </div>
        )}
      {error && <span>Something went wrong.</span>}
      {hasMoreData && loading && <Loader />}
      {products.length > 0 && !hasMoreData && <h5 className="products-empty">~ end of catalogue ~</h5> }
    </>
  );
}

export default ProductsGrid;
