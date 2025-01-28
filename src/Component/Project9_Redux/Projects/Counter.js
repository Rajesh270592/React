import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, neutral } from '../Actions/CounterAction'

export const Counter=()=> {
   let {count}= useSelector((s)=>s.CounterReducer)
   let dispatch = useDispatch()

   
  return (
    <div>
        <h2>Counter : {count}</h2>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
        <button onClick={()=>dispatch(neutral())}>Neutral</button>

    </div>
  )
}
