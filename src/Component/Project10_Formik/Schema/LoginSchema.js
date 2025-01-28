import * as Yup from "yup"
export const LoginSchema = Yup.object({
    name : Yup.string()
    .min(3)
    .max(25)
    .required("Please Enter Valid Name"),



    number : Yup.string()
    .min(10)
    .max(10)
    .required("Please Enter 10 digit mobile number"),
    
    email : Yup.string()
    .email()
    .required("Please enter valid email"),
   
    password : Yup.string()
    .max(6)
    .required("Please enter valid password") 
})



