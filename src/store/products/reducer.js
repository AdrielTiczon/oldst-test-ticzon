import ACTION from './types';

export const initialState = {
  products: [],
  prefetchedProducts: [],
  hasMoreProducts: true,
  isPrefetching: false,
  currentPage: 1,
  prefetchedPage: 1,
  sort: '',
  lastAction: null,
};

const productsReducer = (currentState, action) => {
  switch (action.type) {
    case ACTION.PREFETCH_PRODUCTS:
      return {
        ...currentState,
        prefetchedPage: currentState.prefetchedPage + 1,
        lastAction: action.type,
      };
    case ACTION.PREPARE_PREFETCH_PRODUCTS:
      return {
        ...currentState,
        prefetchedProducts: action.payload,
        hasMoreProducts: action.payload.length > 0,
        lastAction: action.type,
      };
    case ACTION.REVEAL_INITIAL_PRODUCTS:
      return {
        ...currentState,
        products: action.payload,
        lastAction: action.type,
      };
    case ACTION.REVEAL_PRODUCTS:
      return {
        ...currentState,
        products: [...currentState.products, ...currentState.prefetchedProducts],
        prefetchedProducts: [],
        lastAction: action.type,
      };
    case ACTION.SORT_PRODUCTS:
      return {
        ...initialState,
        sort: action.payload,
        lastAction: action.type,
      };
    case ACTION.PREFETCH_STATUS:
      return {
        ...currentState,
        isPrefetching: action.payload,
      };
    default:
      return currentState;
  }
};

export default productsReducer;
