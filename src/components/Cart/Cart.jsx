import React, { Component } from 'react'
import CartItem from '../CartItem/CartItem.jsx'

class Cart extends Component {

  render() {
    return (
      <div className="Cart">
        <h1>Cart</h1>
        <div className="cart-container">
          <div className="items">
            <h3>Items</h3>
            <CartItem />
            <CartItem />
          </div>
          <div className="order-summary">
            <h3>Order Summary</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default Cart
