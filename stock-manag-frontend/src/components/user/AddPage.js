import React, { Component } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { Container, Message } from 'semantic-ui-react'

import AuthContext from '../context/AuthContext'
import { orderApi } from '../misc/OrderApi'
import { handleLogError } from '../misc/Helpers'
import ProductTable from './ProductTable'
import ProductPage from '../user/ProductPage.js'
import OrderForm from '../misc/OrderForm'

class AddPage extends Component {
  static contextType = AuthContext

  state = {
    userMe: null,
    isUser: true,
    isLoading: false,
    orderDescription: '',
    orderProductName: '',
    orderQuantity: '',
    orderPrice: '',

  }

  componentDidMount() {
    const Auth = this.context
    const user = Auth.getUser()
    const isUser = user.data.rol[0] === 'USER'
    this.setState({ isUser })

    this.handleGetUserMe()
  }

  handleInputChange = (e, {name, value}) => {
    this.setState({ [name]: value })
  }

  handleGetUserMe = () => {
    const Auth = this.context
    const user = Auth.getUser()

    this.setState({ isLoading: true })
    orderApi.getUserMe(user)
      .then(response => {
        this.setState({ userMe: response.data })
      })
      .catch(error => {
        handleLogError(error)
      })
      .finally(() => {
        this.setState({ isLoading: false })
      })
  }
  
  handleCreateOrder = () => {
    const Auth = this.context
    const user = Auth.getUser()

    let { orderDescription, orderProductName, orderQuantity, orderPrice } = this.state
    orderDescription = orderDescription.trim()
    orderProductName =  orderProductName.trim()
    orderQuantity = orderQuantity.trim()
    orderPrice = orderPrice.trim()

    if (!orderDescription && orderProductName && orderQuantity && orderPrice) {
      return
    }

    
    const order = { description: orderDescription, productName: orderProductName, quantity: orderQuantity, price: orderPrice }
    orderApi.createOrder(user, order)
      .then(() => {
        this.handleGetUserMe()
        this.setState({ orderDescription: '' })
        this.setState({ orderProductName: '' })
        this.setState({ orderQuantity: '' })
        this.setState({ orderPrice: '' })
      })
      .catch(error => {
        handleLogError(error)
      })
  }

  render() {
    const isOrder = this.state.isOrder;

    if (!this.state.isUser) {
      return <Redirect to='/' />
    } else {
      const { userMe, isLoading, orderDescription, orderProductName, orderQuantity, orderPrice } = this.state
      return (
        <Container>
          <OrderForm className='de'
            orders={userMe && userMe.orders}
            isLoading={isLoading}
            orderDescription={orderDescription}
            orderProductName={orderProductName}
            orderQuantity={orderQuantity}
            orderPrice={orderPrice}
            handleCreateOrder={this.handleCreateOrder}
            handleInputChange={this.handleInputChange}
          />
          
        </Container>
        
      )
    }
  }
}

export default AddPage