import React from 'react'
import mainLogo from './Assets/main-logo.png'


export default function Navbar() {
  return (
    <>
    <nav className='container mt-4 d-flex justify-content-between align-items-center mb-5'>
       <div>
        <img width={'100%'} src={mainLogo} alt="Logo" />
        </div>    
            <ul className='d-flex gap-5'>
                <li>HOME</li>
                <li>SERVICES</li>
                <li>PRODUCTS</li>
                <li>SALE</li>
                <li>BLOG</li>
                <li>SIGNUP</li> 
                <li>LOGIN</li>
            </ul>
    </nav> 
    </>
  )
}
