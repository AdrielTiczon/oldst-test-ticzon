import ACTIONS from './types';

export const initialState = {
  products: [],
  prefetchedProducts: [],
  hasMoreProducts: true,
  isPrefetching: false,
  currentPage: 1,
  sort: '',
  lastAction: null,
};

const productsReducer = (currentState, actions) => {
  switch (actions.type) {
    case ACTIONS.PREFETCH_PRODUCTS:
      return {
        ...currentState,
        currentPage: currentState.currentPage + 1,
        lastAction: actions.type,
      };
    case ACTIONS.PREPARE_PREFETCH_PRODUCTS:
      return {
        ...currentState,
        prefetchedProducts: actions.payload,
        hasMoreProducts: actions.payload.length > 0,
        lastAction: actions.type,
      };
    case ACTIONS.REVEAL_INITIAL_PRODUCTS:
      return {
        ...currentState,
        products: actions.payload,
        lastAction: actions.type,
      };
    case ACTIONS.REVEAL_PRODUCTS:
      return {
        ...currentState,
        products: [...currentState.products, ...currentState.prefetchedProducts],
        prefetchedProducts: [],
        lastAction: actions.type,
      };
    case ACTIONS.SORT_PRODUCTS:
      return {
        ...initialState,
        sort: actions.payload,
        isPrefetching: true,
        lastAction: actions.type,
      };
    case ACTIONS.PREFETCH_STATUS:
      return {
        ...currentState,
        isPrefetching: actions.payload,
      };
    default:
      return currentState;
  }
};

export default productsReducer;
