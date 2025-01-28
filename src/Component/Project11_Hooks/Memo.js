import { useState, useMemo } from "react"

export const  Memo=()=>{
    const [count,setCount]=useState(0)
    const [item,setItem]=useState(10)
   
   const multiplyBy2 = useMemo(function multiplyBy2 (){
    console.log("multiplyBy2 is called");
    
    return count*2
},[count])
   
    // function multiplyBy2(){
    //     console.log("multiplyBy2 is called");
        
    //     return count*2
    // }
    return(
        <>
        <h2>Count = {count}</h2>
        <h2>Item = {item}</h2>
        <h2>multiplyBy2 = {multiplyBy2}</h2>
        <button onClick={()=>{setCount(count+1)}}>Update Count</button>
        <button onClick={()=>{setItem(item*10)}}>Update Item</button>
    
        </>
    )
}