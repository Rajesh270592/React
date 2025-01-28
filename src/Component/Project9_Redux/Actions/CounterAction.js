import { DECREMENT, INCREMENT, NEUTRAL } from "../Constants"

export const increment=()=>{
    return{
        type:INCREMENT
    }
}

export const decrement=()=>{
    return{
        type:DECREMENT
    }
}


export const neutral=()=>{
    return{
        type:NEUTRAL
    }
}