import React, { Component } from 'react'

class ProductsList extends Component {
  render() {
    const { products } = this.props
    return (
      <div className="ProductsList">
        {products.map(({ id, name, description, img}) =>
          <div key={id} className="product">
            <img src={`/static/images/${img}`} alt={img}/>
            <h3>{name}</h3>
            <p>{description}</p>
            <button>Add to Cart</button>
          </div>
        )}
      </div>
    )
  }
}

export default ProductsList
