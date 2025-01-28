import { useState } from "react"
import Hook2part from "./Hook2part"



function Hook2(){
const[count,setCount]=useState(10)
const[number,setNumber]=useState(20)
    return(
        <div>
            <Hook2part count={count} number={number}/>
            <button onClick={()=>{setCount(count+1)}}>Update Count</button>
            <button onClick={()=>{setNumber(number+1)}}>Update number</button>
        </div>
    )
}
export default Hook2