import React, { useState } from 'react'
import { sendData } from '../Config/Firebase/FirebaseMethods'

export default function Post() {

    const [model , setModel] = useState({})


    const uploadProduct = ()=>{
      sendData(model)
    }

  return (
    <>
       <form className='container post-box'>
        <h1>POST PRODUCT</h1>
        <input onChange={(e)=>{
          setModel({...model , Name:e.target.value})
        }} className='input' type="text" placeholder='Product Name . . .' />
        <input onChange={(e)=>{
          setModel({...model , Brand:e.target.value})
        }} className='input' type="text" placeholder='Product Brand . . .' />
        <input onChange={(e)=>{
          setModel({...model , Model:e.target.value})
        }} className='input' type="text" placeholder='Product Model . . .' />
        <input onChange={(e)=>{
          setModel({...model , Category:e.target.value})
        }} className='input' type="text" placeholder='Product Category . . .' />
        <input onChange={(e)=>{
          setModel({...model , Condition:e.target.value})
        }} className='input' type="text" placeholder='Product Condition . . .' />
        <textarea onChange={(e)=>{
          setModel({...model , Description:e.target.value})
        }} className='input' placeholder='Product Description . . .'></textarea>
        <input  className='input' type="file" />
        <button onClick={uploadProduct} className='button2'>POST</button>
     </form> 
    </>
  )
}
