import { UPDATE_FORM_FIELD, VALIDATE_FORM } from "../Constants"

export const updateFormField =(field,value)=>{
    return{
        type : UPDATE_FORM_FIELD,
        payload: {field,value}
    }
}

export const validateForm = (error)=>{
    return{
        type: VALIDATE_FORM,
        payload:{error}
    } 
}