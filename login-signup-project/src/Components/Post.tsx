import React from 'react'

export default function Post() {
  return (
    <>
       <form className='container post-box'>
        <h1>POST PRODUCT</h1>
        <input className='input' type="text" placeholder='Product Name . . .' />
        <input className='input' type="text" placeholder='Product Brand . . .' />
        <input className='input' type="text" placeholder='Product Model . . .' />
        <input className='input' type="text" placeholder='Product Category . . .' />
        <input className='input' type="text" placeholder='Product Condition . . .' />
        <textarea className='input' placeholder='Product Description . . .'></textarea>
        <input className='input' type="file" />
        <button className='button2'>POST</button>
     </form> 
    </>
  )
}
