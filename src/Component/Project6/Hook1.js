
// UseEffect Hook 


import { useEffect, useState } from "react"


function Hook1(){
    const[count,setCount]=useState(0)
useEffect(()=>{
console.log("Useeffect");

})

    return(
        <div>
            <p>count: {count}</p>
            <button onClick={()=>{setCount(count+1)}}>Update</button>
        </div>
    )
}
export default Hook1