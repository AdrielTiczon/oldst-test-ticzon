import React, {
  useEffect, useReducer,
} from 'react';

import {
  ProductsFilter,
  ProductsGrid,
  Header,
} from './components';
import useFetch from './hooks/useFetch';

import { ACTIONS, initialState, productsReducer } from './store';

import './App.scss';

function App() {
  const [productStore, dispatch] = useReducer(productsReducer, initialState);
  const {
    products,
    currentPage,
    sort,
    lastAction,
    hasMoreProducts,
    isPrefetching,
  } = productStore;

  const { data, loading, error } = useFetch(
    '/products',
    { _limit: 20, _page: currentPage, _sort: sort },
  );

  const onClickSort = (selectedSort) => () => dispatch({
    type: ACTIONS.SORT_PRODUCTS,
    payload: selectedSort,
  });

  /*
    This useEffect basically handles the scroll
    and revealing of products when needed.
  */
  useEffect(() => {
    function revealAndPrefetch() {
      dispatch({ type: ACTIONS.REVEAL_PRODUCTS });
      dispatch({ type: ACTIONS.PREFETCH_PRODUCTS });
    }

    /*
      This function is the callback that will be fired when scrolling.
      It checks if there is more products and if its loading.

      If the system is not loading anymore data and the user is at the
      bottom of the page. It will reveal the products and prefetch the
      next set of data.
    */
    function handleScroll() {
      const toRevealNow = !loading && hasMoreProducts
      && window.innerHeight + document.documentElement.scrollTop
        === (document.documentElement.offsetHeight);

      if (!toRevealNow) return;
      revealAndPrefetch();
    }

    /*
      This duplicate line of code is needed is so that if the user
      is already at the bottom of the page and the products is still loading.

      This ensures that if the products are not yet loaded it will render immediately.
      Leaving this out will require the user to scroll again in order for the products to
      appear.
    */
    if (lastAction === ACTIONS.PREPARE_PREFETCH_PRODUCTS && !loading
      && hasMoreProducts
      && window.innerHeight + document.documentElement.scrollTop
        === (document.documentElement.offsetHeight)) revealAndPrefetch();

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, hasMoreProducts, lastAction]);

  /*
    This useEffect is the one that handles
    data that is received from the backend
  */
  useEffect(() => {
    /*
      This dispatch basically keeps updating the loading state.
      The reason why it's required is so that we dont show the loading
      state when the next set of data has already been prefetched.

      Vice-versa if the data for the next dataset is still loading
      then it will show the loading indicator for it.
    */
    dispatch({ type: ACTIONS.PREFETCH_STATUS, payload: loading });

    /*
      Basically checks if there is any data on the grid
      or if there is any sort that happened.

      When that happens it will reveal immediately data and
      start to prefetch the next set of data.
    */
    if (!loading && data && (lastAction === null || lastAction === ACTIONS.SORT_PRODUCTS)) {
      dispatch({ type: ACTIONS.REVEAL_INITIAL_PRODUCTS, payload: data });

      dispatch({ type: ACTIONS.PREFETCH_PRODUCTS });
    }

    /*
      This line of code will determine if the data received was actually
      a prefetched data. Once the prefetched data is available it will store
      the data without revealing to the user.
    */
    if (!loading && data && lastAction === ACTIONS.PREFETCH_PRODUCTS) {
      dispatch({ type: ACTIONS.PREPARE_PREFETCH_PRODUCTS, payload: data });
    }

    return () => null;
  }, [data, loading, error]);

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
