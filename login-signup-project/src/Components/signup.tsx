import React, { useState } from 'react'
import { SignUpUser } from '../Config/Firebase/FirebaseMethods'

export default function Signup() {
  
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  
  const signUpFunction = (e:any)=>{
    e.preventDefault()
    console.log(email , password);
    SignUpUser(email , password)
    
  }


  return (
    <>
    <form onSubmit={signUpFunction} className='container signup-box'>
      <h1 className='heading'>SIGNUP</h1>
        <input className='input' type="text" placeholder='Full Name . . .' />
        <input onChange={(e)=>{ 
          setEmail(e.target.value)
        }} className='input'  value={email} type="email" placeholder='Email . . .' />
        <input className='input' type="number" placeholder='Phone Number . . .' />
        <input className='input' type="date" placeholder='Date Of Birth . . .' />
        <input onChange={(e)=>{
          setPassword(e.target.value)}
        } className='input' value={password} type="password" placeholder='Password . . .' />
        <button type='submit' className='button2'>SIGNUP</button>
     </form> 
    </>
  )
}
