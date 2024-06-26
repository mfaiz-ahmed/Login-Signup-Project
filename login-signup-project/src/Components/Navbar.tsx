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
                <li><a className='text-black text-decoration-none' href="#">HOME</a></li>
                <li><a className='text-black text-decoration-none' href="#services">SERVICES</a></li>
                <li><a className='text-black text-decoration-none' href="#products">PRODUCTS</a></li>
                <li><a className='text-black text-decoration-none' href="#">SALE</a></li>
                <li><a className='text-black text-decoration-none' href="#">BLOG</a></li>
                <li><a className='text-black text-decoration-none' href="#">SIGNUP</a></li> 
                <li><a className='text-black text-decoration-none' href="#">LOGIN</a></li>
            </ul>
    </nav> 
    </>
  )
}
