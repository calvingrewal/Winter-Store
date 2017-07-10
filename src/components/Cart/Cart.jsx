import React, { Component } from 'react'
import { connect } from 'react-redux'
import CartItem from '../CartItem/CartItem.jsx'

class Cart extends Component {

  render() {
    return (
      <div className="Cart">
        <h1>Cart</h1>
        <div className="cart-container">
          <div className="items">
            <h3>Items</h3>
            {
              this.props.items.map(({ id, name, description, img, price}) =>
                <CartItem key={id}
                  id={id}
                  name={name}
                  description={description}
                  img={img}
                  price={price}
                  />
              )
            }
          </div>
          <div className="order-summary">
            <h3>Order Summary</h3>
          </div>
        </div>
      </div>
    )
  }
}
function getItemsFromIds(state, idList) {
  return idList.map(id => {
    const { name, description, img, price } = state.products.productsList[id]
    return {
      id,
      name,
      description,
      img,
      price
    }
  })
}
const mapStateToProps = state => {
  return {
    items: getItemsFromIds(state, state.cart.items)
  }
}
const mapDispatchToProps = dispatch => {
  return {

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)
