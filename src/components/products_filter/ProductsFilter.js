import React from 'react';

import './ProductsFilter.scss';

function ProductsFilter({ currentSort, handleSortChange }) {
  const filters = ['price', 'title', 'rating'];

  return (
    <div className="products-filter">
      <span className="products-filter__label">Sort by</span>
      {
        filters.map((filter) => (
          <button
            className={`products-filter__button ${currentSort === filter ? 'products-filter__button--active' : ''}`}
            type="button"
            onClick={() => handleSortChange(filter)}
          >
            {filter}
          </button>
        ))
      }
    </div>
  );
}

export default ProductsFilter;
