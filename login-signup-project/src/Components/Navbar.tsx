import React from 'react'
import mainLogo from './Assets/main-logo.png'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <nav>
       <div>
        <img width={'100%'} src={mainLogo} alt="Logo" />
        </div>    
            <ul className='d-flex gap-5'>
                <li><Link className='nav-links' to={'/HomePage'}>HOME</Link></li>
                <li><a className='nav-links' href="#services">SERVICES</a></li>
                <li><a className='nav-links' href="#products">PRODUCTS</a></li>
                <li><a className='nav-links' href="#sale">SALE</a></li>
                <li><a className='nav-links' href="#blog">BLOG</a></li> 
                <li><Link className='nav-links' to={'/LoginPage'}>SIGN IN</Link></li>
                <li><Link className='nav-links' to={'/PostPage'}>POST</Link></li>
            </ul>
    </nav> 
    </>
  )
}
