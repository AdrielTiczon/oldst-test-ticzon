import React from 'react';

import './ProductsFilter.scss';

function ProductsFilter({ currentSort, onClickSort }) {
  const filters = ['price', 'title', 'rating'];

  return (
    <div className="products-filter">
      <span className="products-filter__label">Sort by</span>
      {
        filters.map((filter) => (
          <button
            key={filter}
            className={`products-filter__button ${currentSort === filter ? 'products-filter__button--active' : ''}`}
            disabled={currentSort === filter}
            type="button"
            onClick={onClickSort(filter)}
          >
            {filter}
          </button>
        ))
      }
    </div>
  );
}

export default ProductsFilter;
