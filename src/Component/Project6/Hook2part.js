import { useEffect } from "react"

function Hook2part(props){
    useEffect(()=>{
console.log("useeffect called");

    },[props.number])
    return(
        <div>
           <p> count: {props.count}</p>
           <p>number: {props.number}</p>
        </div>
    )
}
export default Hook2part