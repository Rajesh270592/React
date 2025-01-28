import { useState } from "react"

export const Counters = ()=>{
    const [state,setState]=useState(0)

    return(
        <>
        <h1>Counter</h1>
        <h4>{state}</h4>
         
        <button onClick={()=>{setState(state+1)}}>Increase</button>
        <button onClick={()=>{setState(state-1)}}>Decrease</button>
        </>
    )
}