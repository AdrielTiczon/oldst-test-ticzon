import React, { useState } from 'react';

import {
  Ads,
  ProductsFilter,
  ProductsGrid
} from './components';
import useFetch from './hooks/useFetch';

function App() {
  const [currentDataSet, setCurrentDataSet] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSort, setCurrentSort] = useState(null);

  const { data, loading, error } = useFetch(
    '/products',
    { _limit: 20, _page: currentPage, _sort: currentSort }
  )

  console.log({ data, loading, error })

  return (
    <div className='App'>
      <header>
          <h1>Products Grid</h1>
          <p>But first, a word from our sponsors:</p>
          <Ads />
      </header>
      <ProductsFilter />
      <ProductsGrid />
    </div>
  );
}

export default App;
