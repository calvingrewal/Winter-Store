import React, { Component } from 'react'
import './App.sass'
import Products from '../Products/Products.jsx'

class App extends Component {

  render() {
    return (
      <div className="App">
        {
          this.props.children
        }
      </div>
    )
  }
}

export default App
