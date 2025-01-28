// import { Component, createRef } from "react";

// class Userefffff extends Component{
//     constructor(){
//         super()
//        this.inputref=createRef()
//     }
//     handlebtn=()=> {
//         this.inputref.current.value="1000"
//         this.inputref.current.style.backgroundColor="red"
//     }
//     render(){
//         return(
//             <><h2>hello coder's</h2>
//             <input type="text" ref={this.inputref}/>
//             <button onClick={this.handlebtn}>Click</button>
//             </>
//         )
//     }
// }
// export default Userefffff

import React, { useRef } from 'react'
import Egref from './Egref'

export default function Userefffff() {
    let inputref=useRef()

   const handlebtn=()=>{
        // inputref.current.style.display="none"
    inputref.current.focus()
    // inputref.current.style.visibility="hidden"
    }
  return (
    <div>
        {/* <Egref ref={inputref}/> */}
        <input type='text' ref={inputref}/> <br></br>
        <button onClick={handlebtn}>click</button>
    </div>
  )
}