import React, { useState } from 'react'
import { loginUser } from '../Config/Firebase/FirebaseMethods'


export default function Login() {

  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')

  const Login = (e:any)=>{
    e.preventDefault()
    loginUser(email , password)

  }


  

  return (
    <>
     <form onSubmit={Login} className='container login-box'>\
      <h1>LOGIN</h1>
        <input className='input' type="text" placeholder='Full Name . . .' />
        <input onChange={(e)=>{
          setEmail(e.target.value)
        }} className='input' type="email" placeholder='Email . . .' />
        <input onChange={(e)=>{
          setPassword(e.target.value)
        }} className='input' type="password" placeholder='Password . . .' />
        <h3 className='forget'>Forget Password?</h3>
        <button type='submit' className='button2'>LOGIN</button>
     </form> 
    </>
  )
}
