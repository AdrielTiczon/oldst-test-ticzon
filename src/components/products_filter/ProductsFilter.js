import React from 'react';

import './ProductsFilter.scss'

const ProductsFilter = ({ currentSort, handleSortChange }) => {
  const filters = ['price', 'title', 'rating'];

  return (
    <div>
      Sort by:
    {filters.map((filter) => {
    return (<button type='button' onClick={() => handleSortChange(filter)}>{filter}</button>)
  })}
    </div>
  )
};

export default ProductsFilter;
