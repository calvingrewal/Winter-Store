import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductsList from '../ProductsList/ProductsList.jsx'
import { fetchProducts } from '../../actions/ProductsActions'

class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts()
  }
  render() {
    const { products } = this.props
    return (
      <div className="Products">
        <h1>Products</h1>
        {products && products.length ?
          <ProductsList products={products} />
          :
          <p>Loading Products...</p>
        }
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    products: state.Products.productsList,
    isFetching: state.Products.isFetching
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProducts())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Products)
