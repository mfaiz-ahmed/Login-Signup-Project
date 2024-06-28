import React from 'react'

export default function Login() {
  return (
    <>
     <form className='container login-box'>
        <input className='input' type="text" placeholder='Full Name...' />
        <input className='input' type="email" placeholder='Email...' />
        <input className='input' type="password" placeholder='Password...' />
        <button className='button2'>LOGIN</button>
     </form> 
    </>
  )
}
