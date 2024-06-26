import React from 'react'
import mainLogo from './Assets/main-logo.png'


export default function Navbar() {
  return (
    <>
    <nav>
       <div>
        <img width={'100%'} src={mainLogo} alt="Logo" />
        </div>    
            <ul className='d-flex gap-5'>
                <li><a className='nav-links' href="#">HOME</a></li>
                <li><a className='nav-links' href="#services">SERVICES</a></li>
                <li><a className='nav-links' href="#products">PRODUCTS</a></li>
                <li><a className='nav-links' href="#sale">SALE</a></li>
                <li><a className='nav-links' href="#blog">BLOG</a></li>
                <li><a className='nav-links' href="#">SIGNUP</a></li> 
                <li><a className='nav-links' href="#">LOGIN</a></li>
            </ul>
    </nav> 
    </>
  )
}
