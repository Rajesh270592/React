import { useState } from "react"

function Counter(){
    const[count,setCount] = useState(0)
    

    
    return(
          <div>
            <p>Counter : {count}</p>

            <button onClick={()=>{setCount(count+1)}}>Increment</button>  <br></br>
            <button onClick={()=>{if(count>0){setCount(count-1)}}}>Decrement</button> <br></br>
            <button onClick={()=>{setCount(0)}}>Neutral</button>
          </div>
    )
}
export default Counter