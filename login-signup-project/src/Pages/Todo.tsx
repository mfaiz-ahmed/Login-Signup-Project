import React from 'react'
import { sendData } from '../Config/Firebase/FirebaseMethods'

export default function Todo() {
  return (
    <div>
      <input type="text" placeholder='Add Todo' />
      <button onClick={sendData}>Add Todo</button>
    </div>
  )
}
