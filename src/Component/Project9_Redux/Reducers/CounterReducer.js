import React from 'react'
import { DECREMENT, INCREMENT, NEUTRAL } from '../Constants'

let initialState = {
    count : 0
}



export default function CounterReducer(state=initialState,action) {
switch (action.type){
    case INCREMENT :
        return {
            ...state,
            count:state.count+1
        }

        case DECREMENT : 
        return {
            ...state,
            count:state.count-1
        }
        case NEUTRAL : 
        return {
            ...state,
            count:0
        }
       default :
         return state 
         
}
}