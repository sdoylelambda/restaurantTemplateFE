import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'

import { Home } from './components/Home'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Menu } from './components/Menu'
import { Navbar } from './components/Navbar'
import { CreateUser } from './components/CreateUser'
import { Login } from './components/Login'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/createuser' element={<CreateUser />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
