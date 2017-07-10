import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductList from '../ProductList/ProductList.jsx'
import { fetchProducts } from '../../actions/ProductsActions'
import { addProductToCart } from '../../actions/CartActions'

class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts()
  }
  render() {
    const { products } = this.props
    return (
      <div className="Products">
        <h1>Products</h1>
        {products && Object.keys(products).length ?
          <ProductList products={products} handleAddToCart={this.props.addProductToCart} />
          :
          <p>Loading Products...</p>
        }
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    products: state.products.productsList,
    isFetching: state.products.isFetching
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    addProductToCart: (id) => dispatch(addProductToCart(id))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Products)
