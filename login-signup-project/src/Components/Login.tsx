import React, { useState } from 'react'
import { loginUser} from '../Config/Firebase/FirebaseMethods'
import { Link } from 'react-router-dom'

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
      <h1 className='heading'>SIGN IN</h1>
        <input className='input' type="text" placeholder='Full Name . . .' />
        <input onChange={(e)=>{
          setEmail(e.target.value)
        }} className='input' type="email" placeholder='Email . . .' />
        <input onChange={(e)=>{
          setPassword(e.target.value)
        }} className='input' type="password" placeholder='Password . . .' />
        <a id='forget' href=''>Forgot Password ?</a>
        <button type='submit' className='button2'>SIGN IN</button>
        <h3 id='signup'>Don't have an account? <Link to={'/SignupPage'}>Sign up</Link> </h3>
     </form> 
    </>
  )
}
