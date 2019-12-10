import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class Info extends Component {
  
  onOrderButtonClick (e) {
    e.preventDefault()
    this.props.addToCart(this.props.product._id)
    this.props.history.push('/cart')
  }

  render () {
    const { product } = this.props;
    
    return (
      <div className='row space-top'>
        <div className='col-md-4'>
          <div className='card text-white bg-primary'>
            <div className='card-body bg-light'>
              <blockquote className='card-blockquote'>
                <img src={product.image} alt={product.title} className='card-image' />
              </blockquote>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <p><span className='light-blue-text'>Description</span>: {product.description}</p>
          <p><span className='light-blue-text'>Author</span>: {product.author}</p>
          <p><span className='light-blue-text'>Price</span>: ${product.price.toFixed(2)}</p>
          <button className='btn btn-warning btn-sm' onClick={this.onOrderButtonClick.bind(this)}>Order</button>
        </div>
      </div>
    )
  }
}

export default withRouter(Info)
