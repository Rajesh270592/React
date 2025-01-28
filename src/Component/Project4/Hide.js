import React, { useState } from 'react'

function Hide() {

    const[status,setStatus]= useState(true)
  return (
    <div>
        {
           status ? <h1>Showing</h1> : null
        }
        <button onClick={()=>{setStatus(false)}}>Hide</button> <br></br>
        <button onClick={()=>{setStatus(true)}}>Show</button> <br></br>
        <button onClick={()=>{setStatus(!status)}}>Toogle</button> <br></br>
    </div>
  )
}

export default Hide
