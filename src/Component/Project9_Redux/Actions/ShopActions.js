import { BUYBOOK, SELLBOOK } from "../Constants"

export const buyBook = ()=>{
return{
    type: BUYBOOK
}
}

export const sellBook = ()=>{
    return{
        type : SELLBOOK
    }
}