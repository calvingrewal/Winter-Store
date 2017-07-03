import React, { Component } from 'react'
import './App.sass'

class App extends Component {
  state = {
    date: 0,
  }
  componentDidMount() {
    console.log('mounted')
    fetch('/api/products')
      .then(res => res.json())
      .then(products => {
        this.setState({
          date: products.date
        })
      })
  }
  render() {
    return (
      <div className="App">
        <h1>It works!</h1>
        <p>{this.state.date}</p>
      </div>
    )
  }
}

export default App
