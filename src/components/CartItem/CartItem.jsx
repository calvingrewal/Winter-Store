import React from 'react'

const CartItem = ({ id, name, description, img }) => {
  console.log(img)
  return (
    <div className="CartItem">
      <div className="img-container">
        <img src={`/static/images/${img}`} alt="Product Image"/>
      </div>
      <div className="productInfo-container">
        <header>
          <h4>{name}</h4>
          <h4>$99</h4>
        </header>
        <div className="product-details">
          <p>Item #: {id}</p>
          <p>Quantity:</p>
          <p>Unit Price:</p>
        </div>
        <div className="button-group">
          <button className='btn-primary'>Remove</button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
