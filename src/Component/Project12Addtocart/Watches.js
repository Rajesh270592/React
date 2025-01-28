import "./Watches.css"
import rolex1 from "./images/rolex1.avif"
import rolex2 from "./images/Rolex2.avif"
import { useState } from "react"

import { Link } from "react-router-dom"


export const Watches=()=>{
    const [counter,setCounter]=useState(0)
    function handlebutton(){
        alert("Watch added to cart")
        setCounter(counter+1)
       
    }
    function handlebutton1(){
        if(counter>0){
            alert("Watch remove from cart")
        setCounter(counter-1)
       
    }}
    return(
        <>
        <div className="watchsection">
           <div className="sec1">
            <div>
            <img src={rolex1} style={{width:"200px"}}></img>
            Price: 22,00,000 /-
            <button className="button" onClick={handlebutton}>Add</button>
            </div>
           
            {/* <button onClick={handlebutton1}>-</button> */}
            <div>
            <img src={rolex2} style={{width:"200px"}}></img>
            Price: 20,00,000 /-
            <button className="button" onClick={handlebutton}>Add</button>
            </div>
           
            {/* <button onClick={handlebutton1}>-</button> */}
            </div>
            <div className="sec2">
                <button className="button">cart</button>
               <i class="fa-solid fa-cart-shopping"></i>{counter}</div>
        </div>
       <div >
  

       </div>
        </>
    )
}