import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import LoginPage from '../Pages/LoginPage'
import HomePage from '../Pages/HomePage'
import SignupPage from '../Pages/SignupPage'

export default function AppRoutes() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='*' element={<HomePage/>}/>
      <Route path='loginPage' element={<LoginPage/>}/>
      <Route path='SignupPage' element={<SignupPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}
