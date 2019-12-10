import React, { Component } from 'react'
import Info from './Info'
import Auth from '../../utils/auth'
import NotFoundPage from '../common/NotFound/NotFoundPage'
import {addToCartAction} from '../../actions/cartActions'
import {connect} from 'react-redux'

class DetailsPage extends Component {
  render () {
    const productId = this.props.match.params.id
    const product = this.props.products.find(p => p._id === productId)

    if (!product) {
      return (
        <NotFoundPage errMessage='PRODUCT NOT FOUND' />
      )
    }

    const username = Auth.getUsername()

    return (
      <div className='container'>
        <div className='row space-top'>
          <div className='col-md-12'>
            <h1>{product.title}</h1>
          </div>
        </div>
        <Info
          product={product}
          username={username}
          addToCart={this.props.addToCart} />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    products: state.products
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addToCart: (id) => dispatch(addToCartAction(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage)
