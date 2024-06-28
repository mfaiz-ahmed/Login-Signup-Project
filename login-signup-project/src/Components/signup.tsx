import React from 'react'

export default function signup() {
  return (
    <>
    <form className='container signup-box'>
        <input className='input' type="text" placeholder='Full Name...' />
        <input className='input' type="email" placeholder='Email...' />
        <input className='input' type="number" placeholder='Phone Number...' />
        <input className='input' type="date" placeholder='Date Of Birth...' />
        <input className='input' type="password" placeholder='Password...' />
        <input className='input' type="password" placeholder='Confirm Password...' />
        <button className='button2'>SIGNUP</button>
     </form> 
    </>
  )
}
