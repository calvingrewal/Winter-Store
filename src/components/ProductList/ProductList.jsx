import React, { Component } from 'react'

class ProductsList extends Component {
  addToCart = (id) => {
    this.props.handleAddToCart(id)
  }
  render() {
    const { products } = this.props
    return (
      <div className="ProductsList">
        {
          Object.keys(products).map(id => {
            const { name, description, img} = products[id]
            return(
              <div key={id} className="product">
                <img src={`/static/images/${img}`} alt={img}/>
                <h3>{name}</h3>
                <p>{description}</p>
                <button className='btn-primary' onClick={() => this.addToCart(id)}>Add to Cart</button>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default ProductsList
