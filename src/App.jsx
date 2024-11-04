/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import LoginPage from './components/Login'
import SignupPage from './components/Signup'
import FoodDetail from './components/FoodDetails'
import HomePage from './components/Home'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/food' element={<FoodDetail />} />
      </Routes>
    </div>
  )
}

export default App
