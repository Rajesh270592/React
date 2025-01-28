import { UPDATE_FORM_FIELD, VALIDATE_FORM } from "../Constants"

const initialState={
    formData:{
        name:"",
        email:"",
        password:""
    },
    error:{}
}

export const FormReducer=(state=initialState,action)=>{

    switch(action.type){
        case UPDATE_FORM_FIELD:
            return{
                ...state,
                formData:{
                    ...state.formData,
                    [action.payload.field]:action.payload.value
                }
            }
            
            case VALIDATE_FORM:
                return{
                    ...state,
                    error:action.payload.error
                }

                default: 
                return state
    }
}