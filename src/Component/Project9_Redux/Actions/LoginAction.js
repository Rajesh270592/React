import { FETCHFAILED, FETCHGET, FETCHSUCCESS } from "../Constants"
import { AuthService } from "../Service/Auth.service"

export const FetchGet = ()=>{
    return{
        type: FETCHGET
    }
}

export const FetchSuccess = (response)=>{
    return{
        type: FETCHSUCCESS,
        payload: response
    }
}

export const FetchFailed =(error)=>{
    return{
        type: FETCHFAILED,
        payload: error
    }
}

export const FetchApi=(userDetail)=>{
    return async(dispatch)=>{
        try{
          dispatch(FetchGet())
          let response= await AuthService(userDetail)
          dispatch(FetchSuccess(response))
        }catch(error){
           dispatch(FetchFailed(error))
        }
    }
}

