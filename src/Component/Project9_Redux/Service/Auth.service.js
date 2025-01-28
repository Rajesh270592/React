import axios from "axios"
export const AuthService=(userDetail)=>{
axios.post("https://jsonplaceholder.typicode.com/users",userDetail)
.then((response)=>response.data)
.catch((error)=>error)
}