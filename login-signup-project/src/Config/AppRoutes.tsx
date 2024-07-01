import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import LoginPage from '../Pages/LoginPage'
import HomePage from '../Pages/HomePage'
import SignupPage from '../Pages/SignupPage'
import PostPage from '../Pages/PostPage'
import Products from '../Components/Products'


export default function AppRoutes() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='HomePage' element={<HomePage/>}/>
      <Route path='*' element={<LoginPage/>}/>
      <Route path='SignupPage' element={<SignupPage/>}/>
      <Route path='PostPage' element={<PostPage/>}/>
      <Route path='productsPage' element={<Products/>}/>
    </Routes>
    </BrowserRouter>
  )
}
