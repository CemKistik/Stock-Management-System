import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Menu, MenuItem } from 'semantic-ui-react'
import { useAuth } from '../context/AuthContext'

function Navbar() {
  const { getUser, userIsAuthenticated, userLogout } = useAuth()

  const logout = () => {
    userLogout()
  }

  const enterMenuStyle = () => {
    return userIsAuthenticated() ? { "display": "none" } : { "display": "block" }
  }

  const logoutMenuStyle = () => {
    return userIsAuthenticated() ? { "display": "block" } : { "display": "none" }
  }

  const adminPageStyle = () => {
    const user = getUser()
    return user && user.data.rol[0] === 'ADMIN' ? { "display": "block" } : { "display": "none" }
  }

  const addPageStyle = () => {
    const user = getUser()
    return user && user.data.rol[0] === 'USER' ? { "display": "block" } : { "display": "none" }
  }

  const productPageStyle = () => {
    const user = getUser()
    return user && user.data.rol[0] === 'USER' ? { "display": "block" } : { "display": "none" }
  }

  const getUserName = () => {
    const user = getUser()
    return user ? user.data.name : ''
  }

  return (
    <Menu className='menu' inverted color='red' stackable size='massive' style={{borderRadius: 0}}>
      <Container>
      
        
          
       
        <Menu.Item as={Link} exact='true' to="/">ANASAYFA</Menu.Item>
        <Menu.Item as={Link} to="/adminpage" style={adminPageStyle()}>ADMIN SAYFASI</Menu.Item>
        <Menu.Item as={Link} to="/addpage" style={addPageStyle()}>ÜRÜN EKLE</Menu.Item>
        <Menu.Item as={Link} to="/productpage" style={productPageStyle()}>ÜRÜNLERİM</Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item as={Link} to="/login" style={enterMenuStyle()}>GİRİŞ YAP</Menu.Item>
          <Menu.Item as={Link} to="/signup" style={enterMenuStyle()}>KAYIT OL</Menu.Item>
          <Menu.Item header style={logoutMenuStyle()}>{`Merhaba ${getUserName()}`}</Menu.Item>
          <Menu.Item as={Link} to="/" style={logoutMenuStyle()} onClick={logout}>ÇIKIŞ YAP</Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  )
}

export default Navbar
