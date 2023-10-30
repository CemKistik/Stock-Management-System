import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AuthProvider } from './components/context/AuthContext'
import PrivateRoute from './components/misc/PrivateRoute'
import Navbar from './components/misc/Navbar'
import Home from './components/home/Home'
import Login from './components/home/Login'
import Signup from './components/home/Signup'
import AdminPage from './components/admin/AdminPage'
import AddPage from './components/user/AddPage'
import ProductPage from './components/user/ProductPage'

function App() {


  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Route path='/' exact component={Home} />
        
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <PrivateRoute path='/adminpage' component={AdminPage} />
        <PrivateRoute path='/addpage' component={AddPage} />
        <PrivateRoute path='/productpage' component={ProductPage} />
        
      </Router>

    </AuthProvider>

    
  )
}

export default App

