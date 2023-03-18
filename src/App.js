import React, {
  useEffect, useReducer,
} from 'react';

import {
  ProductsFilter,
  ProductsGrid,
  Header,
} from './components';
import useFetch from './hooks/useFetch';

import './App.scss';
import productsReducer, { initialState } from './store/products/reducer';
import ACTIONS from './store/products/types';

function App() {
  const [productStore, dispatch] = useReducer(productsReducer, initialState);
  const {
    products,
    prefetchedPage,
    sort,
    lastAction,
    hasMoreProducts,
    isPrefetching,
  } = productStore;

  const { data, loading, error } = useFetch(
    '/products',
    { _limit: 20, _page: prefetchedPage, _sort: sort },
  );

  const onClickSort = (selectedSort) => () => dispatch({
    type: ACTIONS.SORT_PRODUCTS,
    payload: selectedSort,
  });

  useEffect(() => {
    dispatch({
      type: ACTIONS.PREFETCH_STATUS,
      payload: loading,
    });
    if (loading) return;
    if (data && (lastAction === null || lastAction === ACTIONS.SORT_PRODUCTS)) {
      dispatch({
        type: ACTIONS.REVEAL_INITIAL_PRODUCTS,
        payload: data,
      });

      dispatch({ type: ACTIONS.PREFETCH_PRODUCTS });
    }

    if (lastAction === ACTIONS.PREFETCH_PRODUCTS) {
      dispatch({ type: ACTIONS.PREPARE_PREFETCH_PRODUCTS, payload: data });
    }
  }, [data, loading, error]);

  useEffect(() => {
    function handleScroll() {
      if (hasMoreProducts && window.innerHeight
         + document.documentElement.scrollTop
         === (document.documentElement.offsetHeight)) {
        dispatch({
          type: ACTIONS.REVEAL_PRODUCTS,
        });

        dispatch({ type: ACTIONS.PREFETCH_PRODUCTS });
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, hasMoreProducts]);

  return (
    <div className="store">
      <Header />
      <div className="products-container">
        <ProductsFilter currentSort={sort} onClickSort={onClickSort} />
        <ProductsGrid
          products={products}
          hasMoreData={hasMoreProducts}
          loading={isPrefetching}
          error={error}
        />
      </div>
    </div>
  );
}

export default App;
