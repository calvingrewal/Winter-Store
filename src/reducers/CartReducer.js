import { ADD_PRODUCT_TO_CART } from '../actions/CartActions'

const initialState = {
  items: []
}
function CartReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        items: state.items.concat(action.productId)
      }
  }
  return state
}

export default CartReducer
