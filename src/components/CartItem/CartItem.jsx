import React from 'react'

const CartItem = props =>
  <div className="CartItem">
    <div className="img-container">
      <img src="/static/images/sweater.jpg" alt=""/>
    </div>
    <div className="productInfo-container">
      <header>
        <h4>Jacket</h4>
        <h4>$99</h4>
      </header>
      <div className="product-details">
        <p>Item #:</p>
        <p>Quantity:</p>
        <p>Unit Price:</p>
      </div>
      <div className="button-group">
        <button className='btn-primary'>Remove</button>
      </div>
    </div>
  </div>


export default CartItem
