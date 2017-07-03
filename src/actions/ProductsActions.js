export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'
export function addProductToCart(product) {
  return {
    type: ADD_PRODUCT_TO_CART,
    product
  }
}
export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS'
export function requestProducts() {
  return {
    type: REQUEST_PRODUCTS
  }
}
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'
export function receiveProducts(products) {
  return {
    type: RECEIVE_PRODUCTS,
    receivedAt: Date.now(),
    products
  }
}
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'
export function fetchProducts() {
  return function(dispatch) {
    dispatch(requestProducts())

    return fetch('/api/products')
            .then(res => res.json())
            .then(res => {
              dispatch(receiveProducts(res.products))
            })
  }
}
