import React, { Component } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { Button, Form, Grid, Segment, Message } from 'semantic-ui-react'
import AuthContext from '../context/AuthContext'
import { orderApi } from '../misc/OrderApi'
import { parseJwt, handleLogError } from '../misc/Helpers'

class Login extends Component {
  static contextType = AuthContext

  state = {
    username: '',
    password: '',
    isLoggedIn: false,
    isError: false
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

    const { username, password } = this.state
    if (!(username && password)) {
      this.setState({ isError: true })
      return
    }

    orderApi.authenticate(username, password)
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
          isError: false
        })
      })
      .catch(error => {
        handleLogError(error)
        this.setState({ isError: true })
      })
  }

  getReferer = () => {
    const locationState = this.props.location.state
    return locationState && locationState.referer ? locationState.referer : '/'
  }

  
  render() {
    
    const { isLoggedIn, isError } = this.state
    const referer = this.getReferer()
    if (isLoggedIn) {
      return <Redirect to={referer} />
    } else {
      return (
          <Grid textAlign='center'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Form size='large' onSubmit={this.handleSubmit}>
              <Segment>
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
                  name='password'
                  icon='lock'
                  iconPosition='left'
                  placeholder='Parola'
                  type='password'
                  onChange={this.handleInputChange}
                />
                <Button color='violet' fluid size='large'>Giriş Yap</Button>
              </Segment>
            </Form>
            <Message>{`Mevcut bir hesabınız yok mu? `}
              <a href='/signup' color='violet' as={NavLink} to="/signup">Kayıt Ol</a>
            </Message>
            {isError && <Message negative>Kullanıcı adı veya şifre yanlış!</Message>}
          </Grid.Column>
        </Grid>
        // </div>
        
      )
    }
  }
}

export default Login