import { REQUEST_PRODUCTS, RECEIVE_PRODUCTS } from '../actions/ProductsActions'

const initialState = {
  productsList: {},
  lastFetchedProducts: null,
  isFetching: false
}

function ProductsReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_PRODUCTS:
      return {
          ...state,
          isFetching: true
      }
      break;
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        productsList: action.products,
        lastFetchedProducts: action.receivedAt,
        isFetching: false
      }
      break
  }
  return state
}

export default ProductsReducer
