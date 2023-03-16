import React, { useEffect, useState } from 'react';

import {
  Ads,
  ProductsFilter,
  ProductsGrid
} from './components';
import useFetch from './hooks/useFetch';

import './App.scss';

function App() {
  const [currentDataSet, setCurrentDataSet] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSort, setCurrentSort] = useState(null);

  const { data, loading, error } = useFetch(
    '/products',
    { _limit: 20, _page: currentPage, _sort: currentSort }
  )

  useEffect(() => {
    setCurrentDataSet(prev => [...prev, ...data])
  }, [data])

  console.log({ data, loading, error })

  // useEffect(() => {
  //   const link = document.createElement("link");
  //   link.rel = "preload";
  //   link.href = `http://localhost:8000/products?_limit=20&_page=${currentPage + 1}`;
  //   link.as = 'fetch';
  //   document.head.appendChild(link);

  // }, [currentPage]);

  const handleSortChange = (sort) => {
    setCurrentDataSet([]);
    setCurrentPage(1);
    setCurrentSort(sort)
  }


  return (
    <div className='store'>
      <header>
          <h1>Products Grid</h1>
          <p>But first, a word from our sponsors:</p>
          <Ads />
      </header>
      <div className="products-container">
        {/* <button onClick={() => setCurrentPage(page => page + 1)}>next</button> */}
        <ProductsFilter currentSort={currentSort} handleSortChange={handleSortChange} />
        <ProductsGrid products={currentDataSet} />
      </div>
    </div>
  );
}

export default App;
