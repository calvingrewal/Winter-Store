export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'
export function addProductToCart(productId) {
  return {
    type: ADD_PRODUCT_TO_CART,
    productId
  }
}
