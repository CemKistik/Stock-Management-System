import React, { Component } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { Button, Form, Grid, Segment, Message } from 'semantic-ui-react'
import AuthContext from '../context/AuthContext'
import { orderApi } from '../misc/OrderApi'
import { parseJwt, handleLogError } from '../misc/Helpers'

class Signup extends Component {
  static contextType = AuthContext

  state = {

    name: '',
    surname: '',
    username: '',
    email: '',
    password: '',
    isLoggedIn: false,
    isError: false,
    errorMessage: ''
  }

  componentDidMount() {
    const Auth = this.context
    const isLoggedIn = Auth.userIsAuthenticated()
    this.setState({ isLoggedIn })
  }

  handleInputChange = (e, {name, value}) => {
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { name, surname, username, email, password } = this.state
    if (!( name && surname && username && email && password)) {
      this.setState({
        isError: true,
        errorMessage: 'Lütfen tüm alanları doldurunuz!'
      })
      return
    }

    const user = {  name, surname,  username,  email, password }
    orderApi.signup(user)
      .then(response => {
        const { accessToken } = response.data
        const data = parseJwt(accessToken)
        const user = { data, accessToken }

        const Auth = this.context
        Auth.userLogin(user)

        this.setState({
          username: '',
          password: '',
          isLoggedIn: true,
          isError: false,
          errorMessage: ''
        })
      })
      .catch(error => {
        handleLogError(error)
        if (error.response && error.response.data) {
          const errorData = error.response.data
          let errorMessage = 'Geçersiz Deneme'
          if (errorData.status === 409) {
            errorMessage = errorData.message
          } else if (errorData.status === 400) {
            errorMessage = errorData.errors[0].defaultMessage
          }
          this.setState({
            isError: true,
            errorMessage
          })
        }
      })
  }

  render() {
    const { isLoggedIn, isError, errorMessage } = this.state
    if (isLoggedIn) {
      return <Redirect to='/' />
    } else {
      return (
        <Grid textAlign='center'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Form size='large' onSubmit={this.handleSubmit}>
              <Segment>

                <Form.Input
                  fluid
                  name='name'
                  icon='address card'
                  iconPosition='left'
                  placeholder='Ad'
                  onChange={this.handleInputChange}
                />
                <Form.Input
                  fluid
                  name='surname'
                  icon='address card'
                  iconPosition='left'
                  placeholder='Soyad'
                  onChange={this.handleInputChange}
                />

                <Form.Input
                  fluid
                  autoFocus
                  name='username'
                  icon='user'
                  iconPosition='left'
                  placeholder='Kullanıcı Adı'
                  onChange={this.handleInputChange}
                />

                <Form.Input
                  fluid
                  name='email'
                  icon='at'
                  iconPosition='left'
                  placeholder='Email'
                  onChange={this.handleInputChange}
                />

                <Form.Input
                  fluid
                  name='password'
                  icon='lock'
                  iconPosition='left'
                  placeholder='Parola'
                  type='password'
                  onChange={this.handleInputChange}
                />
                
                <Button color='violet' fluid size='large'>Kayıt Ol</Button>
              </Segment>
            </Form>
            <Message>{`Mevcut bir hesabınız var mı? `}
              <a href='/login' color='violet' as={NavLink} to="/login">Giriş Yap</a>
            </Message>
            {isError && <Message negative>{errorMessage}</Message>}
          </Grid.Column>
        </Grid>
      )
    }
  }
}

export default Signup