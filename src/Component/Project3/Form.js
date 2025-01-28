import React, { useState } from 'react'
import '/home/rj-coder/Desktop/Newreact/my-app/src/App.css'


function Form() {
  const [name, setName] = useState("")
  const [condition, setCondition] = useState(false)
  const [interest, setInterest] = useState("")

  function getFormData(e) {
    console.log(name, condition, interest);
    
    e.preventDefault();
  }
  return (
    <div>
      <h1>Handle Form</h1>
      <form onSubmit={getFormData}>
        <input onChange={(e) => { setName(e.target.value) }} type='text' placeholder='Enter Name'></input> <br></br>
        <select onChange={(e) => { setInterest(e.target.value) }}>
          <option>Cars</option>
          <option>Maruti</option>
          <option>Haundai</option>
          <option>Bmw</option>

        </select><br></br>
        <label class="label">Top Model
          <input onChange={(e) => { setCondition(e.target.checked) }} type='checkbox'></input>
        </label><br></br>
        <button type='submit'>Submit</button>

      </form>
    </div>
  )
}

export default Form