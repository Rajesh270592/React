import { FETCHFAILED, FETCHGET, FETCHSUCCESS } from "../Constants"

let initialState = {
    data:{},
    isLoading:false,
    error: null
}

export const LoginReducer = (state=initialState,action)=>{
    switch(action.type){
        case FETCHGET : 
            return{
                ...state,
                isLoading:true,
                error: null
            }
            
            case FETCHSUCCESS :
                return{
                    ...state,
                    isLoading:false,
                    data:action.payload,
                }

                case FETCHFAILED :
                    return{
                        ...state,
                        error:action.payload 
                        }
        default : return state

    }
}